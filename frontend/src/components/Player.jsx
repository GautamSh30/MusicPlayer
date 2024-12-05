import React from 'react';
import NowPlaying from './NowPlaying';

export default function Player() {
  return (
    <div className="h-full bg-gradient-to-b from-red-800 to-black text-white p-4 sm:p-6 md:rounded-r-2xl flex flex-col">
      <NowPlaying />
    </div>
  );
}
