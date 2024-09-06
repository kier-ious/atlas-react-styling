import React from 'react';

export const VolumeControl = () => {
  return (
    <div className="w-full flex items-center space-x-2">
      <span className="text-gray-500">Volume</span>
        <input type="range" className="w-full" min="0" max="100" />
    </div>
  );
};
