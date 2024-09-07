import React from 'react';


export const CoverArt = () => {
  return (
    <div className='w-64 h-64 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden'>
      <img
        src="src/assets/placeholder.svg"
        alt="Cover Art"
        className="object-cover w-full h-full" />
    </div>
  );
};
