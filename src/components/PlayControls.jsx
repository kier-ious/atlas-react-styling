import React from 'react';

export const PlayControls = () => {
  return (
    <div className="flex justify-between items-center space-x-4">
      <button className="p-2 bg-gray-200 rounded">Speed</button>
      <button className="p-2 bg-gray-200 rounded">Back</button>
      <button className="p-2 bg-gray-500 text-white rounded">Play</button>
      <button className="p-2 bg-gray-200 rounded">Forward</button>
      <button className="p-2 bg-gray-200 rounded">Shuffle</button>
    </div>
  )
}

