import { useState } from 'react';

const SearchBar = ({ onSearch, placeholder = "Search cars..." }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleClear = () => {
        setSearchTerm('');
        onSearch('');
    };

    return (
        <div className="flex items-center max-w-md mx-auto mb-6">
            <div className="relative w-full">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    {searchTerm && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="px-2 py-1 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                    )}
                    <div className="px-3 py-1 text-gray-400">
                        🔍
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;