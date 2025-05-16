import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface QRCodeModalProps {
  shortUrl: string;
  onClose: () => void;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ shortUrl, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Generate QR code using a service (for illustration purposes)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shortUrl)}`;
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
      <div 
        ref={modalRef}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full m-4 shadow-xl animate-scale-in"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">QR Code</h3>
          <button 
            onClick={onClose}
            className="p-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg mb-4">
            <img 
              src={qrCodeUrl} 
              alt="QR Code for shortened URL" 
              className="w-48 h-48 object-contain"
            />
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">
            {shortUrl}
          </p>
          
          <div className="flex gap-4">
            <a 
              href={qrCodeUrl} 
              download={`qrcode-${shortUrl.split('/').pop()}.png`}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
            >
              Download
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;