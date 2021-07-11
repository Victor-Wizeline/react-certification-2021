import { useEffect, useState, useCallback } from 'react';
import { storage } from '../utils/storage';

const API_KEY = process.env.REACT_APP_YOUTUBE_API;

const useYoutubeAPI = (request, isFavs) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const finalRequest = `${request}&key=${API_KEY}`;
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      if (!isFavs) {
        const res = await fetch(finalRequest);
        setVideos(await res.json());
        setLoading(false);
      } else {
        setLoading(false);
        setError(false);
        setVideos({ items: storage.get('favorites') || [] });
      }
    } catch (e) {
      console.log(e);
      setError(true);
      setLoading(false);
    }
  }, [finalRequest, isFavs]);

  useEffect(() => {
    fetchData();
  }, [fetchData, request]);

  return [loading, videos, error];
};

export default useYoutubeAPI;
