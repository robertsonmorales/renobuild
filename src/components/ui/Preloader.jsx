import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-900 text-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mr-2"></div>
      <p className="mt-4 lg:mt-0 text-lg">Loading...</p>
    </div>
  );
};

export default Preloader;
