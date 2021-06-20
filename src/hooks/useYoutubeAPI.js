import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_YOUTUBE_API;
const MAX_RESULTS = 25;

const useYoutubeAPI = (searchTerm) => {
  const request = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAX_RESULTS}&q=${searchTerm}&key=${API_KEY}`;
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(searchTerm);
  useEffect(() => {
    setLoading(true);
    fetch(request)
      .then((res) => res.json())
      .then(setVideos)
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, [request]);

  return [loading, videos, error];
};

export default useYoutubeAPI;
