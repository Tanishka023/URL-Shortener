import React, { useState } from 'react';
import { ShortURL } from '../types';
import { Copy, ExternalLink, Trash, QrCode } from 'lucide-react';
import QRCodeModal from './QRCodeModal';

interface UrlCardProps {
  url: ShortURL;
  onDelete: (id: string) => void;
}

const UrlCard: React.FC<UrlCardProps> = ({ url, onDelete }) => {
  const [copied, setCopied] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  
  const shortUrl = `shortify.io/${url.shortCode}`;
  
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(`https://${shortUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  
  const truncateUrl = (url: string, maxLength = 40): string => {
    return url.length > maxLength
      ? url.substring(0, maxLength) + '...'
      : url;
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 hover:shadow-md transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
          <a 
            href={url.originalUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-gray-800 dark:hover:text-gray-200 flex items-center gap-1 transition-colors"
          >
            <span className="truncate max-w-[250px]">{truncateUrl(url.originalUrl)}</span>
            <ExternalLink size={14} className="flex-shrink-0" />
          </a>
          <span className="text-xs text-gray-500 dark:text-gray-500">
            Created: {formatDate(url.createdAt)}
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center">
              <a
                href={`#view/${url.shortCode}`}
                className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-lg transition-colors"
              >
                {shortUrl}
              </a>
              <button
                onClick={handleCopyClick}
                className="ml-2 p-1.5 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Copy to clipboard"
              >
                <Copy size={16} />
              </button>
              {copied && (
                <span className="ml-2 text-xs text-green-600 dark:text-green-400 animate-fade-in-out">
                  Copied!
                </span>
              )}
            </div>
            <div className="mt-1 flex items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {url.clicks} {url.clicks === 1 ? 'click' : 'clicks'}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowQRCode(true)}
              className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Generate QR Code"
              title="Generate QR Code"
            >
              <QrCode size={18} />
            </button>
            <button
              onClick={() => onDelete(url.id)}
              className="p-2 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Delete URL"
              title="Delete URL"
            >
              <Trash size={18} />
            </button>
          </div>
        </div>
      </div>
      
      {showQRCode && (
        <QRCodeModal 
          shortUrl={`https://${shortUrl}`} 
          onClose={() => setShowQRCode(false)} 
        />
      )}
    </>
  );
};

export default UrlCard;