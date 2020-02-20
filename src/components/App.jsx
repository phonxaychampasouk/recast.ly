// App - The top level container for the entire application. This is the component that will be rendered to the DOM

import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      vidInPlayer: exampleVideoData[0],
      vidList: VideoList(exampleVideoData)
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      vidInPlayer: // vidInPlayer should be the video that was clicked on

    }))
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={exampleVideoData[0]} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={exampleVideoData} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
