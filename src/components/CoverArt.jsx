import React from 'react';


export const CoverArt = () => {
  return (
    <div className='w-48 h-48 bg-gray-200 flex items-center justify-center'>
      <img
        src="/assets/placeholder.svg"
        alt="Cover Art"
        className="object-cover w-full h-full" />
    </div>
  );
};

