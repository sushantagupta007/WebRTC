# WebRTC

Terms:
Web RTC = Web Real Time Communication
P2P = Peer to peer connection

2. Media Capture:
   First Make A constraint object
   const constraints = {
   'video':true, 'audio':true
   }

   navigator = Browser Property
   navigator.mediaDevices.getUserMedia(constraints).then((strea)=>{})
   .catch((err)=>{})
