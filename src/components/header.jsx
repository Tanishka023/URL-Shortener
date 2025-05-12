import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem 
} from './ui/dropdown-menu';
import { FaSignOutAlt, FaLink } from 'react-icons/fa'; // Import the icons

const Header = () => {
  const navigate = useNavigate();
  const user = true; // Replace with actual auth logic

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="Linkly Logo"
          className="h-8 w-8 object-contain"
        />
        <span className="text-xl font-bold">Linkly</span>
      </Link>

      {/* Right Section */}
      {!user ? (
        <Button
          onClick={() => navigate("/auth")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Login
        </Button>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="h-10 w-10 rounded-full overflow-hidden cursor-pointer ring-2 ring-white pt-2"> {/* Added pt-2 here */}
              <img
                src="/avatar.png"
                alt="User Avatar"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-black z-50 mt-2 min-w-[12rem] rounded-md shadow-md">
            <DropdownMenuLabel className="font-bold">Tanishka Bhalla</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center gap-x-3">
              <FaLink className="text-blue-500" /> {/* Icon */}
              My Links {/* Text */}
            </DropdownMenuItem>
            <DropdownMenuItem 
              className="flex items-center gap-x-3" 
              style={{ color: '#e53e3e', fontWeight: '600' }}
            >
              <FaSignOutAlt className="text-red-600" /> {/* Icon */}
              Logout {/* Text */}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </nav>
  );
};

export default Header;
