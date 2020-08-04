import React from "react";

class AudioRecorder extends React.Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerText = `
    console.log("NamSaeng's Camera!");
    var pipeParams = {size:{width:640,height:390}, qualityurl:"avq/720p.xml", accountHash:"e8a9098088c1db348ae13b82a06941cc", eid:"M1zM10", mrt:60, dup:1, ao:1};
    PipeSDK.insert("custom-id",pipeParams,function(recorderObject){
      recorderObject.onUploadDone = function(recorderId, streamName, streamDuration, audioCodec, videoCodec, fileType, audioOnly, location){
        var args = Array.prototype.slice.call(arguments);
        console.log("uploading done " + arguments);
        localStorage.removeItem("thumb");
        localStorage.setItem("video", "https://unicef-batoners.s3.ap-northeast-2.amazonaws.com/uploaded/" + streamName + "_raw." + fileType);
      },
      recorderObject.onDesktopVideoUploadSuccess = function(recorderId, filename,filetype,videoId,audioOnly,location){
        var args = Array.prototype.slice.call(arguments);
        console.log("uploading done " + arguments);
        localStorage.removeItem("thumb");
        localStorage.setItem("video", "https://unicef-batoners.s3.ap-northeast-2.amazonaws.com/uploaded/" + filename + "_raw." + filetype);
      },
      recorderObject.onVideoUploadSuccess = function(recorderId, filename,filetype,videoId,audioOnly,location){
        var args = Array.prototype.slice.call(arguments);
        console.log("uploading mobile done " + arguments);
        localStorage.removeItem("thumb");
        localStorage.setItem("video", "https://unicef-batoners.s3.ap-northeast-2.amazonaws.com/uploaded/" + filename + "_raw." + filetype);
      }
    });
    `;
    document.body.appendChild(script);
  }

  render () {
    return (
      <div id="custom-id" style={{backgroundColor: "green", padding: 10 }} />
    );
  }
}

export default AudioRecorder;