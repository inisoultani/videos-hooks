import React, { useCallback, useEffect, useState } from 'react';
import Youtube from '../api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import SearchBarHooks from './SearchBarHooks';

const AppHooks = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSearchSubmit = async (term) => {
    console.log(term);
    const response = await Youtube.get('search', {
      params: { q: term, maxResults: 5 },
    });
    return response;
  };

  const callOnSearchSubmit = useCallback((term) => {
    const response = onSearchSubmit(term);

    response
      .then((response) => {
        console.log(response);
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  const onVideoSelected = (video) => {
    setSelectedVideo(video);
  };

  useEffect(
    () => {
      callOnSearchSubmit('quranfm');
    },
    [callOnSearchSubmit],
    { capture: true },
  );

  useEffect(
    () => {
      console.log(selectedVideo);
    },
    [selectedVideo],
    { capture: true },
  );

  return (
    <div className="ui container">
      <SearchBarHooks onSearchSubmit={callOnSearchSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList videos={videos} onSelect={onVideoSelected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHooks;
