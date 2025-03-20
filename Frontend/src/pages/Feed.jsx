import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { mockPosts } from "../utils/mockData";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPostCount, setNewPostCount] = useState(0);

  // Sort by timestamp to show newest first
  useEffect(() => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      const sortedPosts = [...mockPosts].sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
      setPosts(sortedPosts);
      setLoading(false);
    }, 800);
  }, []);

  // Simulate a new post coming in every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newPost = {
        id: Math.floor(Math.random() * 1000) + 500,
        userId: Math.floor(Math.random() * 5) + 1,
        user: mockPosts[Math.floor(Math.random() * mockPosts.length)].user,
        userAvatar: `https://i.pravatar.cc/150?img=${Math.floor(
          Math.random() * 70
        )}`,
        content: `New post about ${
          ["technology", "nature", "food", "travel", "pets"][
            Math.floor(Math.random() * 5)
          ]
        } #trending`,
        image:
          Math.random() > 0.3
            ? `https://source.unsplash.com/random/800x600?${
                ["technology", "nature", "food", "travel", "pets"][
                  Math.floor(Math.random() * 5)
                ]
              }&sig=${Math.random()}`
            : null,
        commentCount: Math.floor(Math.random() * 10),
        timestamp: new Date().toISOString(),
      };

      // Update new post count instead of immediately adding to feed
      setNewPostCount((prev) => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const loadNewPosts = () => {
    if (newPostCount > 0) {
      // Simulate loading new posts
      const newPosts = Array(newPostCount)
        .fill()
        .map((_, idx) => ({
          id: Math.floor(Math.random() * 1000) + 500 + idx,
          userId: Math.floor(Math.random() * 5) + 1,
          user: mockPosts[Math.floor(Math.random() * mockPosts.length)].user,
          userAvatar: `https://i.pravatar.cc/150?img=${Math.floor(
            Math.random() * 70
          )}`,
          content: `New post about ${
            ["technology", "nature", "food", "travel", "pets"][
              Math.floor(Math.random() * 5)
            ]
          } #trending`,
          image:
            Math.random() > 0.3
              ? `https://source.unsplash.com/random/800x600?${
                  ["technology", "nature", "food", "travel", "pets"][
                    Math.floor(Math.random() * 5)
                  ]
                }&sig=${Math.random()}`
              : null,
          commentCount: Math.floor(Math.random() * 10),
          timestamp: new Date().toISOString(),
        }));

      setPosts((prev) => [...newPosts, ...prev]);
      setNewPostCount(0);
    }
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Feed</h1>
        <p className="text-gray-600">Latest posts, refreshed in real-time</p>
      </div>

      {newPostCount > 0 && (
        <div className="sticky top-16 z-10 mb-4">
          <button
            onClick={loadNewPosts}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-all duration-200"
          >
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              <span>
                {newPostCount} new {newPostCount === 1 ? "post" : "posts"}
              </span>
            </div>
          </button>
        </div>
      )}

      {loading ? (
        <div className="py-20">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-pink-400 border-t-pink-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading posts...</p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}

      {!loading && posts.length === 0 && (
        <div className="text-center py-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <p className="mt-4 text-gray-500 text-lg">No posts yet</p>
        </div>
      )}
    </Layout>
  );
};

export default Feed;
