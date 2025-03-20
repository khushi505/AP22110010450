import React, { useState } from "react";
import { mockComments } from "../utils/mockData";

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(
    Math.floor(Math.random() * 100) + 10
  );
  const [commentText, setCommentText] = useState("");

  // Get random comments for this post
  const randomComments = mockComments
    .filter((comment) => comment.postId === post.id || Math.random() > 0.5)
    .slice(0, Math.floor(Math.random() * 5) + 1);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden border border-gray-100">
      {/* Post header */}
      <div className="flex items-center p-4">
        <div className="h-10 w-10 rounded-full overflow-hidden bg-gradient-to-br from-pink-400 to-purple-500 flex-shrink-0">
          <img
            src={post.userAvatar}
            alt={post.user}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/150";
            }}
          />
        </div>
        <div className="ml-3 flex-grow">
          <div className="text-sm font-semibold text-gray-900">{post.user}</div>
          <div className="text-xs text-gray-500">
            {formatDate(post.timestamp)}
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
      </div>

      {/* Post content */}
      <div className="px-4 py-2 text-gray-800">
        <p>{post.content}</p>
      </div>

      {/* Post image */}
      {post.image && (
        <div
          className="relative bg-gray-100 w-full"
          style={{ maxHeight: "600px" }}
        >
          <img
            src={post.image}
            alt="Post content"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://via.placeholder.com/800x600?text=Image+Unavailable";
            }}
          />
        </div>
      )}

      {/* Action buttons */}
      <div className="px-4 py-2 flex items-center justify-between border-t border-gray-100">
        <div className="flex space-x-4">
          <button
            onClick={handleLike}
            className="flex items-center text-gray-500 hover:text-pink-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={liked ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`h-6 w-6 ${
                liked ? "text-pink-500 fill-current" : "text-gray-500"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="ml-1 text-sm">{likeCount}</span>
          </button>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center text-gray-500 hover:text-blue-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="ml-1 text-sm">{post.commentCount}</span>
          </button>

          <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
        </div>

        <button
          onClick={() => setBookmarked(!bookmarked)}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={bookmarked ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`h-6 w-6 ${
              bookmarked ? "text-gray-700 fill-current" : "text-gray-500"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>

      {/* Comments section */}
      {expanded && (
        <div className="border-t border-gray-100">
          <div className="p-4 max-h-64 overflow-y-auto bg-gray-50">
            {randomComments.length > 0 ? (
              randomComments.map((comment, idx) => (
                <div key={idx} className="mb-3 last:mb-0">
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full overflow-hidden bg-gradient-to-br from-blue-300 to-purple-400 flex-shrink-0">
                      <img
                        src={`https://i.pravatar.cc/150?img=${Math.floor(
                          Math.random() * 70
                        )}`}
                        alt={comment.user}
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/150";
                        }}
                      />
                    </div>
                    <div className="ml-2 bg-white p-2 rounded-lg shadow-sm flex-grow">
                      <div className="flex justify-between items-baseline mb-1">
                        <span className="text-xs font-medium text-gray-900">
                          {comment.user}
                        </span>
                        <span className="text-xs text-gray-400">
                          {formatDate(comment.timestamp)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-400 py-4">
                No comments yet
              </div>
            )}
          </div>

          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full overflow-hidden bg-gradient-to-br from-pink-400 to-purple-500 flex-shrink-0">
                <img
                  src="https://i.pravatar.cc/150?img=1"
                  alt="Your avatar"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="Add a comment..."
                className="ml-2 flex-grow bg-gray-50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:bg-white"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && commentText.trim()) {
                    setCommentText("");
                  }
                }}
              />
              <button
                className={`ml-2 text-sm font-medium ${
                  commentText.trim()
                    ? "text-pink-500 hover:text-pink-600"
                    : "text-gray-300"
                }`}
                disabled={!commentText.trim()}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
