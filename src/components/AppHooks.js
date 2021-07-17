import React, { useEffect, useState } from 'react';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import SearchBarHooks from './SearchBarHooks';
import useVideos from '../hooks/useVideos';

const AppHooks = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useVideos('quranFM');

  useEffect(
    () => {
      setSelectedVideo(videos[0]);
    },
    [videos],
    { capture: true },
  );

  return (
    <div className="ui container">
      <SearchBarHooks onSearchSubmit={setVideos} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList videos={videos} onSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHooks;
