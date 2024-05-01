import axios from 'axios';

const MAIN_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: MAIN_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) =>{
    const response = await axios.get(`${MAIN_URL}/${url}`,options);
    const data = response.data;
    // console.log(data.items);
    return data;
}