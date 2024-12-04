import { FaBackward, FaPlay, FaForward, FaRandom, FaSyncAlt } from "react-icons/fa";
export default function NowPlaying() {
  return (
      <div className="bg-red-900 text-white rounded-xl p-4 w-full max-w-xs md:w-64 fixed bottom-4 right-4 md:bottom-8 md:right-12 shadow-lg">
          <h2 className="text-center text-gray-300 uppercase text-xs mb-4">
              Now Playing
          </h2>
          <div className="bg-red-800 rounded-lg overflow-hidden mb-2">
              <img
                  src="https://placehold.co/300x200"
                  alt="Michael Jackson performing on stage"
                  className="w-full h-32 md:h-40 object-cover"
              />
          </div>
          <div className="text-center mb-3">
              <h3 className="text-base font-semibold truncate">Beat It</h3>
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
                  <FaRandom />
              </button>
              <button className="text-sm">
                  <FaBackward />
              </button>
              <button className="text-sm bg-red-700 rounded-full p-2">
                  <FaPlay />
              </button>
              <button className="text-sm">
                  <FaForward />
              </button>
              <button className="text-sm">
                  <FaSyncAlt />
              </button>
          </div>
      </div>
  );
}