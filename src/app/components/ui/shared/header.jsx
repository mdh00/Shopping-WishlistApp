import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 shadow-lg">
      <div className="container mx-auto text-center">
        <h2 className="font-bold sm:text-4xl lg:text-5xl">
          Shopping Wishlist
        </h2>
        <p className="text-sm mt-2 sm:text-base">
          Keep track of your favorite items effortlessly
        </p>
      </div>
    </header>
  );
};

export default Header;
