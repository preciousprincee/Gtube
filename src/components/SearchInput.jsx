import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import VideoList from './VideoList';

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      // Set loading state to true while fetching results
      setLoading(true);

      // Pass the query to the onSearch callback
      const response = await onSearch(query);
      setResults(response.data.items);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      // Set loading state to false after fetching results
      setLoading(false);
    }
  };

  return (
    <div className='max-w-10 lg:pl-[500px] lg:mt-[-735px] h-auto mt-[-57px]'>
      <div className="flex pl-44 lg:pl-0 text-black">
        <input
          placeholder="Search for videos..."
          className="rounded-md p-2 w-36 lg:w-96 border border-gray-300 text-black"
          type="text"
          value={query}
          onChange={handleChange}
        />
        <div className="text-4xl bg-gray-300 h-10 w-10 ml-1" onClick={handleSearch}>
          <IoSearchSharp className='text-4xl text-black px-2 pt-1 center' />
        </div>
      </div>

      {/* Display loading message if results are still being fetched */}
      {loading && <h1 className="text-center">Loading...</h1>}

      {/* Display VideoList only if there are results */}
      {!loading && results.length > 0 && <VideoList videos={results} />}
    </div>
  );
};

export default SearchInput;
