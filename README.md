First React Project"# first_react_app" 
# 사용된 RecordRTC 관련 기능들
### IE, Edge, Chrome, Safari, Firefox
- [X] [O] [O] [O] [O] navigator.mediaDevices
- [X] [O] [O] [?] [O] navigator.mediaDevices.getUserMedia
- [O] [O] [O] [O] [O] document.getElementById
- [X] [O] [O] [O] [O] HTMLMediaElement.srcObject
- [O] [O] [O] [O] [O] HTMLMediaElement.src
- [O] [O] [O] [O] [O] HTMLMediaElement.muted
- [O] [O] [O] [O] [O] HTMLMediaElement.play
- [X] [O] [O] [O] [O] RecordRTC
- [X] [O] [O] [X] [O] MediaRecorder API

### 중간결론
- IE, Safari는 확실히 안 되고
- Edge에서 영상이 안 되는 이슈는 살펴봐야 한다. recordRTC 생성 시 recordType이 자동으로 WebAssemblyRecorder가 되면서 기존에 사용하던 MediaStreamRecorder가 되지 않는데, 그것이 이유일 수 있다.
- Firefox에서 실험을 진행해 보아야 한다.
