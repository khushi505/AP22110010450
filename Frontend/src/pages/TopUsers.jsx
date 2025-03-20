import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import UserCard from "../components/UserCard";
import { mockUsers } from "../utils/mockData";

const TopUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      // Sort users by post count
      const sortedUsers = [...mockUsers].sort(
        (a, b) => b.postCount - a.postCount
      );
      setUsers(sortedUsers);
      setLoading(false);
    }, 800);
  }, []);

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Top Users</h1>
        <p className="text-gray-600">Users with the highest number of posts</p>
      </div>

      {loading ? (
        <div className="py-20">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-pink-400 border-t-pink-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading users...</p>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user, index) => (
            <UserCard key={user.id} user={user} rank={index + 1} />
          ))}
        </div>
      )}

      {!loading && users.length === 0 && (
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <p className="mt-4 text-gray-500 text-lg">No users found</p>
        </div>
      )}
    </Layout>
  );
};

export default TopUsers;
