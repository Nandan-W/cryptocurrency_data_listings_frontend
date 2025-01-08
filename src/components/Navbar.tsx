import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LineChart, Info, Database } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <NavLink to="/" className="flex items-center space-x-2 text-xl font-bold">
              <LineChart className="h-6 w-6" />
              <span>CryptoTracker</span>
            </NavLink>
            
            <div className="flex space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-3 py-2 rounded-md ${
                    isActive ? 'bg-gray-900' : 'hover:bg-gray-700'
                  }`
                }
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </NavLink>
              
              <NavLink
                to="/data"
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-3 py-2 rounded-md ${
                    isActive ? 'bg-gray-900' : 'hover:bg-gray-700'
                  }`
                }
              >
                <Database className="h-4 w-4" />
                <span>View Data</span>
              </NavLink>

              <NavLink
                to="/analysis"
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-3 py-2 rounded-md ${
                    isActive ? 'bg-gray-900' : 'hover:bg-gray-700'
                  }`
                }
              >
                <LineChart className="h-4 w-4" />
                <span>Data Analysis</span>
              </NavLink>
              
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-3 py-2 rounded-md ${
                    isActive ? 'bg-gray-900' : 'hover:bg-gray-700'
                  }`
                }
              >
                <Info className="h-4 w-4" />
                <span>About</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;