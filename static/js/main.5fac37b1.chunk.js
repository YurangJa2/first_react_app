(this.webpackJsonpfirst_react_app=this.webpackJsonpfirst_react_app||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),r=n.n(o),c=n(2),l=n(3),u=n(5),s=n(4),d=(n(15),n(1)),m=n.n(d),f=n(6),h=n(9),p=n.n(h),v={checkForInactiveTracks:!1,disableLogs:!1,getNativeBlob:!1,ignoreMutedMedia:!1,initCallback:null,mimeType:"video/webm",type:"video"},y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={initial:!0,file:null,showSelect:!1},e.a=function(){var t=function(t){return e.setState(t)};void 0!==navigator.mediaDevices?navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(function(){var e=Object(f.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById("video").srcObject=n,document.getElementById("video").play(),t({stream:n});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):alert("\uc774 \ube0c\ub77c\uc6b0\uc800\ub294 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \ube0c\ub77c\uc6b0\uc800\ub97c \uc774\uc6a9\ud574 \uc8fc\uc138\uc694.")},e.onStart=function(){var t=e.state.stream,n=p()(t,v);n.startRecording(),e.setState({status:"recording..",recorder:n})},e.onFinish=function(){var t=e.state.recorder;t.stopRecording((function(){var n=t.getBlob(),a=document.createElement("a");a.href=URL.createObjectURL(n),a.download="aDefaultFileName.webm",a.innerHTML="Click here to download the file",document.body.appendChild(a),function(t){e.setState(t)}({status:"done"})}))},e.onClickRecord=function(){var t=e.props.audioOnly;e.setState({initial:!1}),navigator.mediaDevices.getUserMedia(t?{audio:!0}:{video:!0,audio:!0}).then(function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=document.getElementById("video")).srcObject=t,n.muted=!0,n.play();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){alert("\uc774 \ube0c\ub77c\uc6b0\uc800\ub294 \uc2e4\uc2dc\uac04 \ub179\uc74c \ub610\ub294 \ub179\ud654\uac00 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \ube0c\ub77c\uc6b0\uc800\ub97c \uc774\uc6a9\ud558\uac70\ub098 \ud30c\uc77c \uc5c5\ub85c\ub4dc \uae30\ub2a5\uc744 \uc774\uc6a9\ud574 \uc8fc\uc138\uc694."),function(t){e.setState(t)}({initial:!0})}))},e.onChangeFile=function(t){var n=t.target.files[0];e.setState({file:n,initial:!1},(function(){console.log(n),document.getElementById("video").src=URL.createObjectURL(n)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.initial,t=this.props.audioOnly;return i.a.createElement("div",{style:{width:600,height:520,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",padding:20,backgroundColor:"#ddd"}},e?i.a.createElement("div",{style:{width:600,height:400,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"white"}},i.a.createElement("button",{onClick:this.onClickRecord},"\uc2e4\uc2dc\uac04 ",t?"\ub179\uc74c":"\ub179\ud654"),i.a.createElement("input",{type:"file",accept:t?"audio/*":"video/*",onChange:this.onChangeFile}),i.a.createElement("span",null,"\uc704 \ubc84\ud2bc\uc744 \ub204\ub974\uba74 ",i.a.createElement("b",null,"\uc601\uc0c1 \ucd2c\uc601"),"\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),i.a.createElement("span",null,"\ub179\uc74c/\ub179\ud654\ub97c \ub9c8\uce58\uc2e0 \ud6c4 ",i.a.createElement("b",null,"\ud655\uc778")," \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694.")):i.a.createElement("video",{id:"video",controls:!0,width:600,height:480,style:{backgroundColor:"transparent"}}),i.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.a.createElement("button",{onClick:this.onClickCancel},"\ucde8\uc18c")))}}]),n}(i.a.Component),b=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={showSelect:!1,audioOnly:null},e.onClick=function(){return e.setState({showSelect:!0,audioOnly:null})},e.onClickAudio=function(){return e.setState({showSelect:!1,audioOnly:!0})},e.onClickVideo=function(){return e.setState({showSelect:!1,audioOnly:!1})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.showSelect,n=e.audioOnly;return i.a.createElement("div",{style:{display:"block"}},i.a.createElement("h1",null,"RecordRTC \uc74c\uc131/\uc601\uc0c1 \uc5c5\ub85c\ub4dc \ud504\ub85c\ud1a0\ud0c0\uc785"),i.a.createElement("button",{onClick:this.onClick},"\uc74c\uc131 \ud639\uc740 \uc601\uc0c1\uc73c\ub85c \uc785\ub825\ud558\uae30"),t?i.a.createElement("div",{style:{marginTop:30,display:"block"}},i.a.createElement("button",{onClick:this.onClickAudio},"\uc74c\uc131\uc73c\ub85c \uc785\ub825\ud558\uae30"),i.a.createElement("button",{onClick:this.onClickVideo},"\uc601\uc0c1\uc73c\ub85c \uc785\ub825\ud558\uae30")):null,null!==n?i.a.createElement(y,{audioOnly:n}):null)}}]),n}(i.a.Component);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.5fac37b1.chunk.js.map