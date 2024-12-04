import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
    
    return (
    <div className="flex justify-between items-center p-2 pb-2">
        {/* Navigation Links */}
        <ul className="flex space-x-12 text-base font-semibold">
        <li className="hover:text-gray-300 cursor-pointer">Music</li>
        <li className="hover:text-gray-300 cursor-pointer">Podcast</li>
        <li className="hover:text-gray-300 cursor-pointer">Live</li>
        <li className="hover:text-gray-300 cursor-pointer">Radio</li>
        </ul>

        {/* Search Bar */}
        <div className="flex items-center bg-red-950 rounded-full px-4 py-2 w-[28rem]">
        <div className="relative w-full">
            <input
            type="text"
            placeholder="Michael Jackson"
            className="bg-transparent text-white placeholder-gray-400 text-base w-full pr-12 pl-4 focus:outline-none"
            />
            {/* Search Icon */}
            <FaSearch className="text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2" />
        </div>
        </div>
    </div>
    );
}
