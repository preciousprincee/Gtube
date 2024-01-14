import React, { useState } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';

const SearchFeed = () => {
  const [loading, setLoading] = useState(false);

  const onSearch = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get('https://youtube-v31.p.rapidapi.com/search', {
        params: {
          q: query,
          part: 'snippet,id',
          regionCode: 'US',
          maxResults: '5',
          order: 'date',
        },
        headers: {
          'X-RapidAPI-Key': '9199684e62msh24604643123f676p15ef7fjsn1b19079b935d',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        },
      });
      return response;
    } catch (error) {
      console.error('Error searching videos:', error);
      throw error; // Rethrow the error to be caught by the calling code
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchInput className="" onSearch={onSearch} />
      {/* Other components */}
    </div>
  );
};

export default SearchFeed;
