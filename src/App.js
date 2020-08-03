import React from 'react';
import Recorder from './Recorder';
//import 'codemirror/lib/codemirror.css';
//import '@toast-ui/editor/dist/toastui-editor.css';

//import { Editor } from '@toast-ui/react-editor';
//import { Player } from 'video-react';
//import "video-react/dist/video-react.css";

//import "https://cdn.addpipe.com/2.0/pipe.js";
//import "https://cdn.addpipe.com/2.0/pipe.css";

class App extends React.Component {
  state = {
    show: false,
    recorderRef: React.createRef()
  };

  onChangeShow = () => {
    const {show} = this.state;
    this.setState({show: !show});
  };

  /*
  editorRef = React.createRef();

  handleClick = () => {
    console.log(this.editorRef.current.getInstance().getHtml());
  };

  handleFocus = () => {
    console.log('focus!!');
  };*/

  render(){
    const {show, recorderRef} = this.state;
    console.log(recorderRef.current);
    return (
      <div 
        id="app_container"
        style={{
          display: "flex", 
          flexDirection: "column", 
          alignItems: "flex-start"
        }}>
        <h1>비디오 테스트</h1>
        <span>영상 링크: {localStorage.getItem("video")}</span>
        <input type="button" value={show ? "입력 완료" : "영상으로 입력"} onClick={this.onChangeShow}/>
        {show ? (
          <Recorder ref={recorderRef} />
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
