import React from 'react'
import NowPlaying from './NowPlaying'

export default function Player() {
  return (
    <div className="h-full bg-gradient-to-b from-red-800 to-black text-white rounded-r-2xl p-6 flex flex-col">
  <NowPlaying />
    </div>
  )
}
