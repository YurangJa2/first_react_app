import React from 'react';
//import 'codemirror/lib/codemirror.css';
//import '@toast-ui/editor/dist/toastui-editor.css';

//import { Editor } from '@toast-ui/react-editor';
//import { Player } from 'video-react';
//import "video-react/dist/video-react.css";

//import "https://cdn.addpipe.com/2.0/pipe.js";
//import "https://cdn.addpipe.com/2.0/pipe.css";

class App extends React.Component {
  state = {
    script: document.createElement("script"),
    show: true
  };

  componentDidMount () {
    const {script} = this.state;
    script.type = "text/javascript";
    script.innerText = `
    console.log("NamSaeng's Camera!");
    var pipeParams = {size:{width:640,height:390}, qualityurl:"avq/720p.xml", accountHash:"e8a9098088c1db348ae13b82a06941cc", eid:"M1zM10", mrt:60, dup:1};
    PipeSDK.insert("custom-id",pipeParams,function(recorderObject){
      recorderObject.onUploadDone = function(recorderId, streamName, streamDuration, audioCodec, videoCodec, fileType, audioOnly, location){
        var args = Array.prototype.slice.call(arguments);
        console.log("onUploadDone("+args.join(', ')+")");
        alert("https://eu1-addpipe.s3.eu-central-1.amazonaws.com/e8a9098088c1db348ae13b82a06941cc/" + streamName);
      },
      recorderObject.onDesktopVideoUploadSuccess = function(recorderId, filename,filetype,videoId,audioOnly,location){
        var args = Array.prototype.slice.call(arguments);
        console.log("onDesktopVideoUploadSuccess("+args.join(', ')+")");
        alert("https://eu1-addpipe.s3.eu-central-1.amazonaws.com/e8a9098088c1db348ae13b82a06941cc/" + filename + "." + filetype);
      }
    });
    `;
    document.body.appendChild(script);
  }

  onChangeShow = () => {
    const {show, script} = this.state;
    this.setState({show: !show}, () => setTimeout(() => document.body.appendChild(script), 1000));
  }

  onRemoveScript = () => {
    document.body.removeChild(this.state.script);
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
    const {show} = this.state;
    console.log("render");
    return (
      <div>
        <h1>비디오 테스트</h1>
        <input type="button" value="영상 켜기/끄기" onClick={this.onChangeShow}/>
        <input type="button" value="스크립트 지우기" onClick={this.onRemoveScript}/>
        {show ? (
          <div id="custom-id" style={{backgroundColor: "green", width: 640, height: 480}} />
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
