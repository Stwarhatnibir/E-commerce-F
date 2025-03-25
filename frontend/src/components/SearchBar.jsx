import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(location.pathname.includes("collection") || showSearch);
  }, [location, showSearch]);

  return showSearch && visible ? (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Search Input */}
        <div className="flex items-center w-full max-w-2xl mx-auto bg-gray-50 rounded-lg px-4 py-2 transition-all duration-300 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-500">
          <img
            className="w-5 h-5 opacity-70 mr-3"
            src={assets.search_icon}
            alt="Search"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none bg-transparent text-sm placeholder-gray-500"
            type="text"
            placeholder="Search for products..."
          />
        </div>

        {/* Close Button */}
        <button
          onClick={() => setShowSearch(false)}
          className="ml-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <img
            className="w-5 h-5 opacity-70"
            src={assets.cross_icon}
            alt="Close"
          />
        </button>
      </div>
    </div>
  ) : null;
};

export default SearchBar;
