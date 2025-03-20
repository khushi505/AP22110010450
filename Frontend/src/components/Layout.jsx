import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6 sm:px-6 lg:px-8 max-w-6xl">
        {children}
      </main>
      <footer className="bg-white shadow-inner py-4 mt-auto">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          © 2025 Social Media Analytics Platform
        </div>
      </footer>
    </div>
  );
};

export default Layout;
