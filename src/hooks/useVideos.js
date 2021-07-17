import { useState, useCallback, useEffect } from 'react';
import Youtube from '../api/Youtube';

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  const onSearch = async (term) => {
    console.log(term);
    const response = await Youtube.get('search', {
      params: { q: term, maxResults: 5 },
    });
    return response;
  };

  const searchVideos = useCallback((term) => {
    const response = onSearch(term);

    response
      .then((response) => {
        console.log(response);
        setVideos(response.data.items);
        //setSelectedVideo(response.data.items[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(
    () => {
      searchVideos(defaultTerm);
    },
    [searchVideos, defaultTerm],
    { capture: true },
  );

  return [videos, searchVideos];
};

export default useVideos;
