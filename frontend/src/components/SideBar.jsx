import React from 'react';
import { FaHome, FaFire, FaMusic, FaCompass, FaCog, FaSignOutAlt } from 'react-icons/fa';

export default function SideBar() {
  return (
    <div className="h-full bg-black text-white rounded-l-2xl p-10 flex flex-col">
      {/* Logo */}
      <div className="flex items-center space-x-3 mb-16">
        <FaMusic className="text-red-500 text-5xl w-8 h-10" />
        <h1 className="text-2xl font-bold text-red-500">
          Dream<span className="text-white">Music</span>
        </h1>
      </div>

      {/* Menu */}
      <div className="mb-0">
        <p className="text-gray-500 uppercase text-sm mb-4">Menu</p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <FaHome className="text-red-500 text-lg" />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaFire className="text-red-500 text-lg" />
            <span>Trends</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaMusic className="text-red-500 text-lg" />
            <span>Library</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaCompass className="text-red-500 text-lg" />
            <span>Discover</span>
          </li>
        </ul>
      </div>

      {/* General */}
      <div className="mt-auto mb-12">
        <p className="text-gray-500 uppercase text-sm mb-4">General</p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <FaCog className="text-red-500 text-lg" />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-3">
            <FaSignOutAlt className="text-red-500 text-lg" />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
