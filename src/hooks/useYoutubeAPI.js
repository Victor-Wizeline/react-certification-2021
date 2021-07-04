import { useEffect, useState, useCallback } from 'react';

const API_KEY = process.env.REACT_APP_YOUTUBE_API;

const useYoutubeAPI = (request) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const finalRequest = `${request}&key=${API_KEY}`;
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(finalRequest);
      setVideos(await res.json());
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError(true);
      setLoading(false);
    }
  }, [finalRequest]);

  useEffect(() => {
    fetchData();
  }, [fetchData, request]);

  return [loading, videos, error];
};

export default useYoutubeAPI;
