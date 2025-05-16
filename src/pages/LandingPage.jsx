import { useState } from 'react';

const LandingPage = () => {
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement URL shortening logic
        console.log('URL to shorten:', url);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center pt-24">
            <h1 className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-8">Short URL</h1>

            <div className="w-full max-w-2xl mx-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700/20 p-8">
                <h2 className="text-2xl text-gray-700 dark:text-gray-200 text-center mb-8">
                    Paste the URL to be shortened
                </h2>

                <form onSubmit={handleSubmit} className="mb-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="url"
                            placeholder="Enter the link here"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="flex-1 h-12 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded px-4 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                            required
                        />
                        <button
                            type="submit"
                            className="h-12 px-6 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold rounded transition-colors"
                        >
                            Shorten URL
                        </button>
                    </div>
                </form>

                <div className="text-center space-y-2 text-gray-600 dark:text-gray-400">
                    <p>ShortURL is a free tool to shorten URLs and generate short links</p>
                    <p>URL shortener allows to create a shortened link making it easy to share</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage; 