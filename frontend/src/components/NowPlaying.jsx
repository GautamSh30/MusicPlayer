import React from "react";

export default function NowPlaying() {
  return (
    <div className="bg-red-900 text-white rounded-xl p-4 w-64 fixed bottom-8 right-12 shadow-lg">
      <h2 className="text-center text-gray-300 uppercase text-xs mb-4">Now Playing</h2>
      <div className="bg-red-800 rounded-lg overflow-hidden mb-2">
        <img
          src="https://via.placeholder.com/150"
          alt="Song Cover"
          className="w-full h-32 object-cover"
        />
      </div>
      <div className="text-center mb-3">
        <h3 className="text-base font-semibold">Beat It</h3>
        <p className="text-gray-400 text-xs">Michael Jackson</p>
      </div>
      <div className="flex items-center justify-between text-gray-300 mb-2">
        <span className="text-xs">2:15</span>
        <div className="relative w-full mx-2">
          <div className="h-1 bg-gray-700 rounded-full">
            <div className="h-1 bg-white rounded-full w-1/2"></div>
          </div>
        </div>
        <span className="text-xs">4:18</span>
      </div>
      <div className="flex items-center justify-around text-white">
        <button className="text-sm">
          <i className="fas fa-backward"></i>
        </button>
        <button className="text-sm bg-red-700 rounded-full p-2">
          <i className="fas fa-play"></i>
        </button>
        <button className="text-sm">
          <i className="fas fa-forward"></i>
        </button>
      </div>
    </div>
  );
}
