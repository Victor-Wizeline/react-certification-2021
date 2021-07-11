import { storage } from './storage';

function random(limit) {
  return Math.floor(Math.random() * limit);
}

function checkIfFavorite(videoId) {
  return Boolean((storage.get('favorites') || []).find((e) => e.id.videoId === videoId));
}

function addToFavorites(video) {
  storage.set('favorites', [...(storage.get('favorites') || []), video]);
}

function removeFromFavorites(videoId) {
  const videos = storage.get('favorites');
  const video = videos.find((e) => e.id.videoId === videoId);

  if (video) videos.splice(videos.indexOf(video), 1);
  storage.set('favorites', videos);
}

export { random, removeFromFavorites, addToFavorites, checkIfFavorite };
