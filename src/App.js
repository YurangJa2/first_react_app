import React from 'react';
import AudioRecorder from './AudioRecorder';
import VideoRecorder from './VideoRecorder';
//import 'codemirror/lib/codemirror.css';
//import '@toast-ui/editor/dist/toastui-editor.css';

//import { Editor } from '@toast-ui/react-editor';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";
import Axios from 'axios';

//import "https://cdn.addpipe.com/2.0/pipe.js";
//import "https://cdn.addpipe.com/2.0/pipe.css";

class App extends React.Component {
  state = {
    show: false,
    audioOnly: null
  };

  onShow = () => {
    localStorage.removeItem("thumb");
    localStorage.removeItem("video");
    this.setState({show: true});
  };

  onHide = () => {
    const video = localStorage.getItem("video");
    if (video !== null) {
      // 비디오 URL이 유효해질 때까지 버틴다.
      Axios.get(video).then(response => {
        this.setState({show: false, audioOnly: null});
      }).catch(e => alert("아직 업로드 중입니다. 잠시만 기다려주세요."));
    } else {
      this.setState({show: false, audioOnly: null});
    }
  }

  onClick = v => {
    this.setState({audioOnly: v});
  }

  /*
  editorRef = React.createRef();

  handleClick = () => {
    console.log(this.editorRef.current.getInstance().getHtml());
  };

  handleFocus = () => {
    console.log('focus!!');
  };*/

  render(){
    const {show, audioOnly} = this.state;
    const video = localStorage.getItem("video");
    // 음성 혹은 영상으로 입력하기 버튼을 누르면 show가 true가 된다.
    // 하지만 audioOnly가 null이라면 음성과 영상 둘 중 선택하라는 메시지가 뜬다.
    // show와 audioOnly가 둘 다 null이 아닌 boolean이라면, audioOnly의 값에 따라 음성/영상 레코더가 뜬다.
    // 입력 완료 버튼을 누르면 show는 false가 되고, audioOnly는 null이 된다.
    return (
      <div 
        id="app_container"
        style={{
          display: "flex", 
          flexDirection: "column", 
          alignItems: "flex-start"
        }}>
        <h1>비디오 테스트</h1>
        {video ? (
          <Player
            playsInline
            src={video}
          />
        ) : <span>업로드된된 비디오 없음</span>}
        <p>미디어 파일 URL: {video}</p>
        {show && audioOnly !== null ? (
          <input type="button" value="입력 완료" onClick={this.onHide}/>
        ) : null}
        {!show && !audioOnly ? (
          <input type="button" value="음성 혹은 영상으로 입력하기" onClick={this.onShow} />
        ) : null}
        {show ? (
          <>
          {audioOnly === null ? (
            <>
            <input type="button" value="음성 입력" onClick={() => this.onClick(true)} />
            <input type="button" value="영상 입력" onClick={() => this.onClick(false)} />
            </>
          ) : (
            <>
            {audioOnly === true ? (
              <AudioRecorder />
            ) : (
              <VideoRecorder />
            )}
            </>
          )}
          </>
        ) : <h3>Off</h3>}
      </div>
    );
    /*
    <link rel="stylesheet" href="//cdn.addpipe.com/2.0/pipe.css" />
    <script type="text/javascript" src="//cdn.addpipe.com/2.0/pipe.js"></script>
    <script type="text/javascript">
    var pipeParams = {size:{width:640,height:390}, qualityurl:"avq/720p.xml", accountHash:"e8a9098088c1db348ae13b82a06941cc", eid:"M1zM10", mrt:60, dup:1};
    PipeSDK.insert("custom-id",pipeParams,function(recorderObject){});
    </script>
    return (
      <div>
        <div style={{width: 500, height: 300}}>
          <Player
            playsInline
            poster="https://i.ytimg.com/vi/XxrTaalo6sU/original.jpg"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>
        <Editor
          initialValue="hello react editor world!"
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
          ref={this.editorRef}
          onFocus={this.handleFocus}
        />
        <button onClick={this.handleClick}>submit</button>
      </div>
    );*/
  }
}

export default App;
