import { Link, useLocation, NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useCart } from '../hooks/useCart.js';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  const { itemCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setIsOpen(false); 
    logout();
  };

  const closeMenu = () => setIsOpen(false);

  if (location.pathname === '/login' || location.pathname === '/') {
    return null;
  }

  return (
    <nav className=" bg-green-600 text-white px-4 sm:px-8 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      
      <Link
        to="/home"
        onClick={closeMenu}
        className="font-extrabold text-xl cursor-pointer tracking-wide"
      >
        Nova Shop
      </Link>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isAuthenticated && (
        <ul className="hidden md:flex gap-6 items-center">
          
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `hover:text-green-100 transition ${
                  isActive ? 'font-semibold underline' : ''
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `hover:text-green-100 transition ${
                  isActive ? 'font-semibold underline' : ''
                }`
              }
            >
              Produk
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative hover:text-green-100 transition ${
                  isActive ? 'font-semibold underline' : ''
                }`
              }
            >
              Keranjang
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="bg-white text-green-700 px-4 py-1.5 rounded-md font-semibold hover:bg-green-50 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      )}

      {isOpen && isAuthenticated && (
        <ul 
          className="absolute top-full left-0 right-0 bg-green-700 md:hidden flex flex-col items-center gap-4 p-4 shadow-lg z-40"
        >
          <li className="w-full text-center">
            <NavLink
              to="/home"
              onClick={closeMenu} 
              className={({ isActive }) =>
                `block py-2 hover:text-green-100 transition ${
                  isActive ? 'font-semibold underline' : ''
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="w-full text-center">
            <NavLink
              to="/products"
              onClick={closeMenu} 
              className={({ isActive }) =>
                `block py-2 hover:text-green-100 transition ${
                  isActive ? 'font-semibold underline' : ''
                }`
              }
            >
              Produk
            </NavLink>
          </li>
          <li className="w-full text-center">
            <NavLink
              to="/cart"
              onClick={closeMenu}
              className={({ isActive }) =>
                `relative block py-2 hover:text-green-100 transition ${
                  isActive ? 'font-semibold underline' : ''
                }`
              }
            >
              Keranjang
              {itemCount > 0 && (
                <span className="absolute top-1 right-[35%] bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </NavLink>
          </li>
          <li className="w-full">
            <button
              onClick={handleLogout}
              className="w-full bg-white text-green-700 px-4 py-2 rounded-md font-semibold hover:bg-green-50 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;