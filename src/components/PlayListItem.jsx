import React from 'react';

export const PlayListItem = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md my-2 rounded-lg">
      <div>
        <h3 className="text-md font-semibold">Electric Fever</h3>
        <p className="text-sm text-gray-500">Neon Jungle</p>
      </div>
        <div className="text-gray-500">
          <p>8:41</p>
        </div>
    </div>
  );
};
