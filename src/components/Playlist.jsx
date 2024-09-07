import React from 'react';
import { PlayListItem } from './PlayListItem';


const playListInfo = [
  { title: 'Painted in Blue', artist: 'Soul Canvas', length: '5:55'},
  { title: 'Tidal Drift', artist: 'Echoes of the Sea', length: '8:02'},
  { title: 'Fading Shadows', artist: 'The Emberlight', length: '3:01'},
  { title: 'Cosmic Drift', artist: 'Solar Flare', length: '5:01'},
  { title: 'Urban Serenade', artist: 'Midnight Groove', length: '4:54'},
  { title: 'Whispers in the Wind', artist: 'Rust & Ruin', length: '6:13'},
  { title: 'Electric Fever', artist: 'Neon Jungle', length: '8:41'},
  { title: 'Edge of the Abyss', artist: 'Steel Horizon', length: '2:27'},
  { title: 'Golden Haze', artist: 'Velvet Waves', length: '3:15'},
  { title: 'Shatter the Silence', artist: 'Thunderclap Echo', length: '8:22'}
];

export const Playlist = () => {
  return (
    <div className="w-full p-6 mx-auto max-w-screen-md bg-white rounded-lg shadow-md border border-gray-300">
      <h1 className="text-2xl font-bold mb-4">Playlist</h1>
        <ul className="space-y-0">
            {playListInfo.map((song, index) => (
              <PlayListItem
                key={index}
                title={song.title}
                artist={song.artist}
                length={song.length}
              />
            ))}
        </ul>
    </div>
  );
};
