import React from 'react';
import Navbar from './Navbar';

function MainPage() {
  const tracks = [
    // ... Track data as provided
  ];

  return (
    <div className="h-full bg-gradient-to-b from-red-900 to-black text-white px-4 sm:px-10 lg:px-24 py-3 flex flex-col">
      <Navbar />
      <div className="text-white shadow-md">
        {/* Artist Image */}
        <img
          src="/Artist.png"
          alt="Michael Jackson"
          className="w-full max-w-4xl h-auto mx-auto mb-6 rounded-lg"
        />

        {/* Popular Section */}
        <div>
          <div className="flex flex-wrap justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0">Popular</h2>
            <button className="text-xs sm:text-sm text-gray-400 hover:text-gray-300">See All</button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="py-2">#</th>
                  <th className="py-2 px-2 sm:px-6 lg:px-20">TITLE</th>
                  <th className="py-2">PLAYING</th>
                  <th className="py-2">TIME</th>
                  <th className="py-2 px-2 sm:px-4 lg:px-10">ALBUM</th>
                </tr>
              </thead>
              <tbody>
                {tracks.map((track, index) => (
                  <tr
                    key={track.id}
                    className={`${
                      track.isPlaying ? "bg-red-800" : ""
                    } hover:bg-red-700 cursor-pointer`}
                  >
                    <td className="py-2 px-2">{index + 1}</td>
                    <td className="py-2 flex items-center space-x-2 sm:space-x-4">
                      <img
                        src={track.img}
                        alt={track.title}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded"
                      />
                      <span className="truncate">{track.title}</span>
                    </td>
                    <td className="py-2">{track.playing}</td>
                    <td className="py-2">{track.time}</td>
                    <td className="py-2 truncate px-2 sm:px-4">{track.album}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
