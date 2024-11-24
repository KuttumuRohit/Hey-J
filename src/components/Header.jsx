import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-10">
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="text-2xl font-bold text-green-600">Hey J</div>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-green-600' : 'hover:text-green-500')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-green-600' : 'hover:text-green-500')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/features" className={({ isActive }) => (isActive ? 'text-green-600' : 'hover:text-green-500')}>
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-green-600' : 'hover:text-green-500')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-2 p-4">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'text-green-600' : 'hover:text-green-500')} onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-green-600' : 'hover:text-green-500')} onClick={() => setIsOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/features" className={({ isActive }) => (isActive ? 'text-green-600' : 'hover:text-green-500')} onClick={() => setIsOpen(false)}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-green-600' : 'hover:text-green-500')} onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
