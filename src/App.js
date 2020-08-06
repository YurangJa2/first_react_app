import React from 'react';
//import { Player } from 'video-react';
import "video-react/dist/video-react.css";
import Recorder from "./Recorder";

class App extends React.Component {
  state = {
    showSelect: false,
    audioOnly: null
  };

  onClick = () => this.setState({showSelect: true, audioOnly: null});
  onClickAudio = () => this.setState({showSelect: false, audioOnly: true});
  onClickVideo = () => this.setState({showSelect: false, audioOnly: false});
  onHide = () => this.setState({showSelect: false, audioOnly: null});

  render(){
    const {showSelect, audioOnly} = this.state;
    return (
      <div style={{display: "block"}}>
        <h1>RecordRTC 음성/영상 업로드 프로토타입</h1>
        <button onClick={this.onClick}>음성 혹은 영상으로 입력하기</button>
        {showSelect ? (
          <div style={{marginTop: 30, display: "block"}}>
            <button onClick={this.onClickAudio}>음성으로 입력하기</button>
            <button onClick={this.onClickVideo}>영상으로 입력하기</button>
          </div>
        ) : null}
        {audioOnly !== null ? (
          <Recorder audioOnly={audioOnly} onHide={this.onHide}/>
        ) : null}
      </div>
    );
  }
}

export default App;
