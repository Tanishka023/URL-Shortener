import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Shortify. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <p className="flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> by Shortify Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;