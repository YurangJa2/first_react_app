import React from "react";

class VideoRecorder extends React.Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerText = `
    console.log("NamSaeng's Camera!");
    var pipeParams = {size:{width:640,height:390}, qualityurl:"avq/720p.xml", accountHash:"e8a9098088c1db348ae13b82a06941cc", eid:"M1zM10", mrt:60, dup:1};
    PipeSDK.insert("custom-id",pipeParams,function(recorderObject){
      recorderObject.onUploadDone = function(recorderId, streamName, streamDuration, audioCodec, videoCodec, fileType, audioOnly, location){
        var args = Array.prototype.slice.call(arguments);
        console.log("uploading done " + arguments);
        localStorage.setItem("thumb", "https://eu1-addpipe.s3.eu-central-1.amazonaws.com/e8a9098088c1db348ae13b82a06941cc/" + streamName + ".jpg");
        localStorage.setItem("video", "https://eu1-addpipe.s3.eu-central-1.amazonaws.com/e8a9098088c1db348ae13b82a06941cc/" + streamName + ".mp4");
      },
      recorderObject.onDesktopVideoUploadSuccess = function(recorderId, filename,filetype,videoId,audioOnly,location){
        var args = Array.prototype.slice.call(arguments);
        console.log("uploading done " + arguments);
        localStorage.setItem("thumb", "https://eu1-addpipe.s3.eu-central-1.amazonaws.com/e8a9098088c1db348ae13b82a06941cc/" + filename + ".jpg");
        localStorage.setItem("video", "https://eu1-addpipe.s3.eu-central-1.amazonaws.com/e8a9098088c1db348ae13b82a06941cc/" + filename + ".mp4");
      },
      recorderObject.onVideoUploadSuccess = function(recorderId, filename,filetype,videoId,audioOnly,location){
        var args = Array.prototype.slice.call(arguments);
        console.log("uploading mobile done " + arguments);
        localStorage.setItem("thumb", "https://eu1-addpipe.s3.eu-central-1.amazonaws.com/e8a9098088c1db348ae13b82a06941cc/" + filename + ".jpg");
        localStorage.setItem("video", "https://eu1-addpipe.s3.eu-central-1.amazonaws.com/e8a9098088c1db348ae13b82a06941cc/" + filename + ".mp4");
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

export default VideoRecorder;