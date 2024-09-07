import React from 'react';
import { CurrentlyPlaying } from './components/CurrentlyPlaying';
import { Playlist } from './components/Playlist';


export default function MusicPlayer() {
  return (
    <div className="items-center p-6 rounded-lg w-full max-w-screen-md mx-auto shadow-md border border-gray-300">
      <CurrentlyPlaying />
    </div>
  );
};
