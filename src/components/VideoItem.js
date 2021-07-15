import '../css/VideoItem.css';

import React from 'react';

class VideoItem extends React.Component {
  onVideoItemClick = () => {
    this.props.onSelect(this.props.video);
  };

  render() {
    const video = this.props.video;
    return (
      <div className="video-item item" onClick={this.onVideoItemClick}>
        <img
          className="ui image"
          alt={video.snippet.title}
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
