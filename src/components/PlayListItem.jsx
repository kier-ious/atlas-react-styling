import React from 'react';

export const PlayListItem = () => {
  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-200">
      <div>
        <h3 className="text-md font-semibold">Song Title</h3>
        <p className="text-sm text-gray-200"></p>
      </div>
      <span className="text-sm text-gray-500"></span>
    </div>
  );
};
