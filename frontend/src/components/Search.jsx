import React from "react";

const Search = () => {
  return (
    <div className="w-full flex justify-center pt-4 text-white space-x-4">
      <input
        type="text"
        className="bg-gray-600 rounded-lg p-1 px-2"
        placeholder="Search..."
      />
      <button className="text-sm ">
        <img
          className="w-10 rounded-full bg-blue-100"
          src="https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg"
          alt="search"
        />
      </button>
    </div>
  );
};

export default Search;
