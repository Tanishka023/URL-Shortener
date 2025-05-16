import { useState, useEffect } from 'react';
import { Link, Moon, Sun } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const Header = ({ toggleTheme, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${scrolled
          ? 'bg-white dark:bg-gray-900 shadow-md py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <RouterLink to="/" className="flex items-center">
          <Link className="text-blue-500 dark:text-blue-400" size={24} />
          <h1 className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
            Shortify
          </h1>
        </RouterLink>

        <div className="flex items-center space-x-4">
          {/* Login Button */}
          <RouterLink
            to="/login"
            className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Login
          </RouterLink>

          {/* Sign Up Button */}
          <RouterLink
            to="/signup"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            Sign Up
          </RouterLink>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="text-gray-300 hover:text-gray-100" size={20} />
            ) : (
              <Moon className="text-gray-700 hover:text-gray-900" size={20} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;