import React from 'react'
import Navbar from './Navbar'
import { FaSearch, FaCheckCircle, FaMusic } from "react-icons/fa";

function MainPage() {
  const tracks = [
    {
      id: 1,
      title: "Billie Jean",
      playing: "1.040.811.084",
      time: "4:53",
      album: "Thriller 25 Super Deluxe",
      img: "https://via.placeholder.com/50", // Replace with real image URL
    },
    {
      id: 2,
      title: "Beat It",
      playing: "643.786.045",
      time: "4:18",
      album: "Thriller 25 Super Deluxe",
      img: "https://via.placeholder.com/50",
      isPlaying: true, // Indicates currently playing track
    },
    {
      id: 3,
      title: "Smooth Criminal - 2012 Remaster",
      playing: "407.234.004",
      time: "4:17",
      album: "Thriller 25 Super Deluxe",
      img: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      title: "Don't Stop 'Til You Get Enough",
      playing: "316.391.952",
      time: "6:05",
      album: "Bad 25th Anniversary",
      img: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      title: "Rock With You - Single Version",
      playing: "268.187.218",
      time: "3:40",
      album: "Off The Wall",
      img: "https://via.placeholder.com/50",
    },
];
  return (
    <div className="h-full bg-gradient-to-b from-red-900 to-black text-white px-24 py-8 flex flex-col">
      <Navbar></Navbar>
      <div className=" text-white shadow-md">
      {/* Artist Section */}
      <div className="flex items-center space-x-6 mb-8">
        <img
          src="https://via.placeholder.com/300x200" // Replace with real image URL
          alt="Michael Jackson"
          className="w-80 h-48 rounded-lg object-cover"
        />
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <FaCheckCircle className="text-blue-500" />
            <span className="text-sm text-gray-400">Verified Artist</span>
          </div>
          <h1 className="text-4xl font-bold">Michael Jackson</h1>
          <p className="text-gray-400 text-sm">27.852.501 monthly listeners</p>
        </div>
      </div>

      {/* Popular Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Popular</h2>
          <button className="text-sm text-gray-400 hover:text-gray-300">See All</button>
        </div>

        {/* Table */}
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-600">
              <th className="py-2">#</th>
              <th className="py-2 px-20">TITLE</th>
              <th className="py-2">PLAYING</th>
              <th className="py-2">TIME</th>
              <th className="py-2 px-10">ALBUM</th>
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
                <td className="py-2 flex items-center space-x-4">
                  <img
                    src={track.img}
                    alt={track.title}
                    className="w-10 h-10 rounded"
                  />
                  <span>{track.title}</span>
                </td>
                <td className="py-2">{track.playing}</td>
                <td className="py-2">{track.time}</td>
                <td className="py-2 truncate">{track.album}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default MainPage