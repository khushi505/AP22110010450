import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { mockPosts } from "../utils/mockData";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      // Sort by comment count to get trending posts
      const trendingPosts = [...mockPosts].sort(
        (a, b) => b.commentCount - a.commentCount
      );
      setPosts(trendingPosts);
      setLoading(false);
    }, 800);
  }, []);

  const filterPosts = (type) => {
    setFilter(type);
  };

  // Get filtered posts
  const filteredPosts =
    filter === "all"
      ? posts
      : posts.filter((post) => post.content.toLowerCase().includes(filter));

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Trending Posts
        </h1>
        <p className="text-gray-600">Posts with the most engagement</p>
      </div>

      {/* Filter tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-6 overflow-x-auto">
        <div className="flex p-1 min-w-max">
          <button
            onClick={() => filterPosts("all")}
            className={`px-4 py-2 mx-1 rounded-md text-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            All Trending
          </button>
          <button
            onClick={() => filterPosts("technology")}
            className={`px-4 py-2 mx-1 rounded-md text-sm font-medium transition-colors ${
              filter === "technology"
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Technology
          </button>
          <button
            onClick={() => filterPosts("ocean")}
            className={`px-4 py-2 mx-1 rounded-md text-sm font-medium transition-colors ${
              filter === "ocean"
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Ocean
          </button>
          <button
            onClick={() => filterPosts("elephant")}
            className={`px-4 py-2 mx-1 rounded-md text-sm font-medium transition-colors ${
              filter === "elephant"
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Elephant
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-20">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-pink-400 border-t-pink-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Finding trending posts...</p>
          </div>
        </div>
      ) : (
        <>
          {filteredPosts.length > 0 ? (
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No trending posts found
              </h3>
              <p className="mt-2 text-gray-500">
                No posts matching "{filter}" are currently trending.
              </p>
              <button
                onClick={() => setFilter("all")}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                View all trending
              </button>
            </div>
          )}
        </>
      )}

      {/* Stats card */}
      {!loading && filteredPosts.length > 0 && (
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Trending Stats
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <p className="text-sm text-gray-500">Total Posts</p>
              <p className="text-2xl font-bold text-gray-900">
                {filteredPosts.length}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <p className="text-sm text-gray-500">Average Comments</p>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(
                  filteredPosts.reduce(
                    (acc, post) => acc + post.commentCount,
                    0
                  ) / filteredPosts.length
                )}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <p className="text-sm text-gray-500">Top Author</p>
              <p className="text-2xl font-bold text-gray-900">
                {
                  Object.entries(
                    filteredPosts.reduce((acc, post) => {
                      acc[post.user] = (acc[post.user] || 0) + 1;
                      return acc;
                    }, {})
                  ).sort((a, b) => b[1] - a[1])[0][0]
                }
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default TrendingPosts;
