import React from "react";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<nav className="flex justify-between items-center bg-gray-200 p-4">
<div className="flex items-center">
<Link to="/">
<span className="flex items-center gap-1 font-mono">
<SiLeetcode className="text-lg font-bold" /> AlgoLand
</span>
  </Link>
</div>
<ul className="flex justify-center space-x-16">
  <li>
    <Link to="/problems" className="text-gray-600 hover:text-gray-900">
    Problems
    </Link>
  </li>
  <li>
    <Link to="/signup" className="text-gray-600 hover:text-gray-900">
      Signup
    </Link>
  </li>
  <li>
    <Link to="/login" className="text-gray-600 hover:text-gray-900">
      Login
    </Link>
  </li>
</ul>
</nav>
  );
};

export default Navbar;
