import React from 'react';

import {SideBar, MainPage, Player} from "./components"

function App() {
  return (
    <div className="flex h-screen w-screen bg-black">
      <div className="w-1/5 bg-gray-200">
        <SideBar />
      </div>
      <div className="w-3/5 bg-white">
        <MainPage />
      </div>
      <div className="w-1/5 bg-gray-300">
        <Player />
      </div>
    </div>
  );
}

export default App;
