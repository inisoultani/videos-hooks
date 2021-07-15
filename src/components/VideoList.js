import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
  populateVideoList = () => {
    const videos = this.props.videos.map((video) => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onSelect={this.props.onSelect}
        />
      );
    });

    return videos;
  };

  render() {
    return (
      <div className="ui relaxed divided list">{this.populateVideoList()}</div>
    );
  }
}

export default VideoList;
