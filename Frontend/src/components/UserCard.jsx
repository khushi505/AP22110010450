import React from "react";

const UserCard = ({ user, rank }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col sm:flex-row mb-4 border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="w-full sm:w-16 flex-shrink-0 bg-gradient-to-r from-pink-500 to-purple-600 text-white flex items-center justify-center text-xl font-bold">
        {rank}
      </div>

      <div className="sm:ml-4 p-4 flex items-center">
        <div className="h-12 w-12 rounded-full overflow-hidden bg-gradient-to-br from-pink-400 to-purple-500 flex-shrink-0">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/150";
            }}
          />
        </div>

        <div className="ml-4 flex-grow">
          <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-1">
            <span className="text-sm text-gray-500">
              {user.postCount} posts
            </span>

            <button className="mt-2 sm:mt-0 text-sm font-medium text-pink-600 hover:text-pink-700 transition-colors duration-200">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
