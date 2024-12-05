import React from 'react';
import { FaHome, FaFire, FaMusic, FaCompass, FaCog, FaSignOutAlt } from 'react-icons/fa';

export default function SideBar() {
  return (
    <div className="h-full bg-black text-white p-4 sm:p-6 md:rounded-l-2xl flex flex-col">
      {/* Logo */}
      <div className="flex items-center space-x-3 mb-8">
        <FaMusic className="text-red-500 text-4xl sm:text-5xl" />
        <h1 className="text-xl sm:text-2xl font-bold text-red-500">
          Dream<span className="text-white">Music</span>
        </h1>
      </div>

      {/* Menu */}
      <div className="mb-8">
        <p className="text-gray-500 uppercase text-xs sm:text-sm mb-4">Menu</p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 cursor-pointer">
            <FaHome className="text-red-500 text-lg" />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer">
            <FaFire className="text-red-500 text-lg" />
            <span>Trends</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer">
            <FaMusic className="text-red-500 text-lg" />
            <span>Library</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer">
            <FaCompass className="text-red-500 text-lg" />
            <span>Discover</span>
          </li>
        </ul>
      </div>

      {/* General */}
      <div className="mt-auto">
        <p className="text-gray-500 uppercase text-xs sm:text-sm mb-4">General</p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 cursor-pointer">
            <FaCog className="text-red-500 text-lg" />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-3 cursor-pointer">
            <FaSignOutAlt className="text-red-500 text-lg" />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
