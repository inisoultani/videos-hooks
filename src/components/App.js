import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onSearchSubmit('quranfm');
  }

  onSearchSubmit = async (term) => {
    console.log(term);
    const response = await Youtube.get('search', {
      params: { q: term, maxResults: 5 },
    });
    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelected = (video) => {
    this.setState({ selectedVideo: video }, () => {
      // this is kind of a way if we wanto to use the state immadiately after update
      // this arrow function will executed when the async setState completed
      console.log(video);
      console.log(this.state.selectedVideo);
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="six wide column">
              <VideoList
                videos={this.state.videos}
                onSelect={this.onVideoSelected}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
