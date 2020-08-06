import React from "react";
import RecordRTC from 'recordrtc';

class Recorder extends React.Component {
  state = {
    initial: true,
    stream: null,
    recorder: null,
    file: null,
    recording: null,
    recordTime: ""
  };

  calculateTimeDuration = secs => {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600)) / 60);
    var sec = Math.floor(secs - (hr * 3600) - (min * 60));
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    if(hr <= 0) return min + ':' + sec;
    return hr + ':' + min + ':' + sec;
  }

  onClickDisplay = () => {
    const {audioOnly} = this.props;
    const setState = config => this.setState(config);
    // 마이크와 영상 권한을 얻는다.
    this.setState({initial: false});
    navigator.mediaDevices.getUserMedia(
      audioOnly ? { audio: true } : { video: true, audio: true }
    ).then(async function(stream){
      setState({stream, recording: false});
      const video = document.getElementById("video");
      video.srcObject = stream;
      video.muted = true;
      video.play();
    }).catch(e => {
      alert("이 브라우저는 실시간 녹음 또는 녹화가 지원되지 않습니다. 다른 브라우저를 이용하거나 파일 업로드 기능을 이용해 주세요.");
      setState({initial: true});
    }); 
  };

  onClickStart = () => {
    const {stream} = this.state;
    let recorder = RecordRTC(stream, {
      mimeType: "video/webm;codecs=vp8",
      type: "video",
      timeSlice: 1000
    });
    recorder.startRecording();

    const getState = () => this.state;
    const setState = config => this.setState(config);
    const duration = d => this.calculateTimeDuration(d);
    const finish = () => this.onClickFinish();
    
    this.setState({recorder, recording: true}, () => {
      // 녹화 시간 계산
      const startTime = new Date().getTime();
      (function looper() {
        if (!getState().recorder) return;
        const timeDuration = duration((new Date().getTime() - startTime) / 1000);
        if (timeDuration === "00:10") finish();
        setState({recordTime: timeDuration});
        setTimeout(looper, 1000);
      })();
    });
  };
  
  onClickFinish = () => {
    const setState = config => this.setState(config);
    const {stream, recorder} = this.state;
    recorder.stopRecording(function() {
      const blob = recorder.getBlob();
      // 비디오 태그에 추가.
      const video = document.getElementById("video");
      video.srcObject = null;
      video.src = URL.createObjectURL(blob);
      video.muted = false;
      video.play();


      // 스트림과 레코더 폐기
      stream.stop();
      recorder.destroy();
      setState({recorder: null, stream: null, recording: null, file: blob});
    });
  };

  onClickReset = () => {
    const {stream, recorder} = this.state;
    // 스트림과 레코더 폐기
    if (stream !== null) stream.stop();
    if (recorder !== null) recorder.destroy();
    this.setState({initial: true, stream: null, recorder: null});
  };

  onChangeFile = v => {
    const file = v.target.files[0];
    // initial 상태를 풀고, 비디오에 영상을 넣는다.
    this.setState({file, initial: false}, () => {
      console.log(file);
      document.getElementById("video").src = URL.createObjectURL(file);
    });
  };

  onClickCancel = () => {
    const {stream, recorder} = this.state;
    // 스트림과 레코더 폐기
    if (stream !== null) stream.stop();
    if (recorder !== null) recorder.destroy();
    this.props.onHide();
  };

  render () {
    const {initial, recording, file, recordTime} = this.state;
    const {audioOnly} = this.props;
    return (
      <div style={{
        width: 400, height: 320, 
        display: "flex", flexDirection: "column", 
        alignItems: "center", justifyContent: "space-between",
        padding: 20, backgroundColor: "#ddd"
      }}>
        {initial ? (
          <div style={{
            width: 400, height: 280, display: "flex", flexDirection: "column", 
            alignItems: "center", justifyContent: "center", backgroundColor: "white"}}>
            <button onClick={this.onClickDisplay} >실시간 {audioOnly ? "녹음" : "녹화"}</button>
            <input type="file" accept={audioOnly ? "audio/*" : "video/*"} onChange={this.onChangeFile} />
            <span>위 버튼을 누르면 <b>영상 촬영</b>을 할 수 있습니다.</span>
            <span>녹음/녹화를 마치신 후 <b>확인</b> 버튼을 눌러주세요.</span>
          </div>
        ) : (
          <video id="video" controls={recording === null} width={400} height={280} style={{backgroundColor: "transparent"}} />
        )}
        <span>녹화 시간: {recordTime}(최대 00:10)</span>
        <div style={{display: "flex", flexDirection: "row"}}>
          {initial === false && recording === false? (
            <button onClick={this.onClickStart} >녹음 시작</button>
          ) : null}
          {initial === false && recording === true ? (
            <button onClick={this.onClickFinish} >녹음 종료</button>
          ) : null}
          {initial === false && file !== null ? (
            <a href={URL.createObjectURL(file)} download="RecordRTC.webm">다운로드</a>
          ) : null}
          {initial === false ? (
            <button onClick={this.onClickReset} >처음부터</button>
          ) : null}
          <button onClick={this.onClickCancel} >취소</button>
        </div>
      </div>
    );
  }
}

export default Recorder;