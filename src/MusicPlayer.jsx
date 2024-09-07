import React from 'react';
import { CoverArt } from "./components/CoverArt";
import { SongTitle } from "./components/SongTitle";
import { PlayControls } from "./components/PlayControls";
import { VolumeControl } from "./components/VolumeControl";
import { PlayListItem } from "./components/PlayListItem";


export default function MusicPlayer() {
  return (
    <div className="music-player flex flex-col items-center space-y-6 p-6 rounded-lg shadow-lg">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControl />
        <div className="playlist space-y-4 w-full">
          <PlayListItem />
          <PlayListItem />
          <PlayListItem />
        </div>
    </div>
  );
}
