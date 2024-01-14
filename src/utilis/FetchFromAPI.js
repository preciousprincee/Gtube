import axios from 'axios';

const BASE_URL ='https://youtube-v31.p.rapidapi.com/';

const options = {
  url: BASE_URL,
  params: {
    videoId: 'M7FIvfx5J10',
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};


