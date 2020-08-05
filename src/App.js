import React from 'react';
//import { Player } from 'video-react';
import "video-react/dist/video-react.css";
//import Axios from 'axios';
import RecordRTC from 'recordrtc';
import { config } from './config';

class App extends React.Component {
  state = {
    status: "None",
    stream : null,
    recorder: null
  };

    
  componentDidMount () {
    const setState = config => this.setState(config);
    if (navigator.mediaDevices === undefined) {
      alert("이 브라우저는 지원하지 않습니다. 다른 브라우저를 이용해 주세요.");
      return;
    }
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    }).then(async function(stream){
      document.getElementById("video").srcObject = stream;
      document.getElementById("video").play();
      setState({stream: stream});
    }); 
  }

  onStart = () => {
    const {stream} = this.state;
    let recorder = RecordRTC(stream, config);
    recorder.startRecording();
    this.setState({status: "recording..", recorder: recorder});
  };

  onFinish = () => {
    const setState = config => this.setState(config);
    const {recorder} = this.state;
    recorder.stopRecording(function() {
      const blob = recorder.getBlob();
      var link = document.createElement("a"); // Or maybe get it from the current document
      link.href = URL.createObjectURL(blob);
      link.download = "aDefaultFileName.webm";
      link.innerHTML = "Click here to download the file";
      document.body.appendChild(link); // Or append it wh
      setState({status: "done"});
    });
  };

  render(){
    return (
      <div>
        <h1>{this.state.status}</h1>
        <input type="button" value="촬영 시작" onClick={this.onStart} />
        <input type="button" value="촬영 종료" onClick={this.onFinish} />
        <video 
          id="video" 
          style={{width: 400, height: 300, backgroundColor: "black"}} 
        />
      </div>
    );
  }
}

export default App;
