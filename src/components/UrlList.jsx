import React from 'react';
import { ShortURL } from '../types';
import UrlCard from './UrlCard';

interface UrlListProps {
  urls: ShortURL[];
  onDelete: (id: string) => void;
}

const UrlList: React.FC<UrlListProps> = ({ urls, onDelete }) => {
  if (urls.length === 0) {
    return (
      <div className="text-center p-8">
        <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400">No shortened URLs yet</h3>
        <p className="text-gray-500 dark:text-gray-500 mt-2">
          Enter a URL above to create your first short link
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {urls.map(url => (
        <UrlCard 
          key={url.id} 
          url={url} 
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default UrlList;