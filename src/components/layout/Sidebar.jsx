import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, Layers, Box, Palette, Hash, Lock } from "lucide-react"; // npm i lucide-react

const sideBar = () => {
  const linkStyle =
    "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-700 transition";

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-blue-600 text-white shadow-lg flex flex-col p-4">
      {/* LOGO */}
      <h1 className="text-2xl font-bold mb-4 px-4">
        MyApp
      </h1>
      {/* LINKS */}
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink to="/" className={linkStyle}>
            <Home size={22} />
            <span>Home</span>
          </NavLink>
        </li>
       

        {/* COMPONENTS */}
        <li className="mt-6 text-sm uppercase text-blue-200 px-4">
          Components
        </li>

        <li>
          <NavLink to="/change-color" className={linkStyle}>
            <Palette size={20} />
            <span>Change Color</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/counter" className={linkStyle}>
            <Hash size={20} />
            <span>Counter</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/password-generator" className={linkStyle}>
            <Lock size={20} />
            <span>Password Generator</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default sideBar;
