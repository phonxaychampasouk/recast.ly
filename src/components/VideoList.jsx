// VideoList - A container component responsible for populating props list entry components

import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (
  <div className="props-list">
    {props.videos.map((vid) => (
      <VideoListEntry key={vid.id.videoId} video={vid} />))}
  </div>
);


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

