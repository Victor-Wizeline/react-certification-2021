import { useEffect, useState, useCallback } from 'react';

const API_KEY = process.env.REACT_APP_YOUTUBE_API;
const MAX_RESULTS = 25;

const useYoutubeAPI = (searchTerm) => {
  const request = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAX_RESULTS}&q=${searchTerm}&key=${API_KEY}`;
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(request);
      setVideos(await res.json());
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError(true);
      setLoading(false);
    }
  }, [request]);

  useEffect(() => {
    fetchData();
  }, [fetchData, request]);

  return [loading, videos, error];
};

export default useYoutubeAPI;
