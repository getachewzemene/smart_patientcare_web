// import { useRef, useState, useEffect, useReducer } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Peer from "simple-peer";
// import { io } from "socket.io-client";
// import VideoCallHeader from "../../partials/video-call-header/videoCallHeader";
// import VideoCallFooter from "../../partials/video-call-footer/videoCallFooter";
// import MeetingInfo from "../../partials/meeting-info/meeting-info";
// import Messenger from "../../partials/messenger/messenger";
// import MessegeListReducer from "../../reducers/message_list_reducer";
// import { getRequest, postRequest } from "../../../services/api_request";
// import {
//   BASE_URL,
//   GET_CALL_ID,
//   SAVE_CALL_ID,
// } from "../../../services/api_endpoint";

// import "./video-call.scss";

// let peer = null;
// const socket = io.connect("http://localhost:4000", {
//   withCredentials: true,
//   extraHeaders: {
//     "my-header": "abcd",
//   },
// });
// const initialState = [];
// const VideoCall = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const isAdmin = window.location.hash === "#init" ? true : false;
//   const url = `${window.location.origin}${window.location.pathname}`;
//   let alertTimeout = null;
//   const videoRef = useRef(null);
//   const [messegeList, messegeListReducer] = useReducer(
//     MessegeListReducer,
//     initialState
//   );
//   const [streamObj, setStreamObj] = useState();
//   const [screenCastStreem, setScreenCastStream] = useState();
//   const [MeetingInfoPopup, setMeetingInfoPopup] = useState(false);
//   const [isPresenting, setIsPresenting] = useState(false);
//   const [isMessenger, setIsMessenger] = useState(false);
//   const [messegeAlert, setMessegeAlert] = useState({});
//   const [isAudio, setIsAudio] = useState(true);

//   useEffect(() => {
//     const getMeetingCode = async () => {
//       const response = await getRequest(`${BASE_URL}${GET_CALL_ID}/${id}`);
//       console.log(response.code);
//       if (response.code) {
//         peer.signal(response.code);
//       }
//     };
//     const initWebRTC = () => {
//       var peer1 = new Peer({ initiator: true }); // you don't need streams here
//       var peer2 = new Peer();

//       peer1.on("signal", (data) => {
//         peer2.signal(data);
//       });

//       peer2.on("signal", (data) => {
//         peer1.signal(data);
//       });

//       peer2.on("stream", (stream) => {
//         // got remote video stream, now let's show it in a video tag
//         var video = document.querySelector("video");

//         if ("srcObject" in video) {
//           video.srcObject = stream;
//         } else {
//           video.src = window.URL.createObjectURL(stream); // for older browsers
//         }

//         video.play();
//       });

//       function addMedia(stream) {
//         peer1.addStream(stream); // <- add streams to peer dynamically
//       }

//       // then, anytime later...
//       navigator.mediaDevices
//         .getUserMedia({
//           video: true,
//           audio: true,
//         })
//         .then(addMedia)
//         .catch(() => {});

//       // navigator.mediaDevices
//       //   .getUserMedia({
//       //     audio: true,
//       //     video: true,
//       //   })
//       //   .then((stream) => {
//       //     const config = {
//       //       iceServers: [
//       //         { urls: "stun:stun.l.google.com:19302" },
//       //         { urls: "stun:global.stun.twilio.com:3478?transport=udp" },
//       //       ],
//       //     };

//       //     peer = new Peer({
//       //       initiator: isAdmin,
//       //       trickle: false,
//       //       stream: stream,
//       //       // streams: [...stream],
//       //       config: config,
//       //       offerOptions: {
//       //         iceRestart: true,
//       //         offerToReceiveAudio: true,
//       //         offerToReceiveVideo: true,
//       //       },
//       //       objectMode: false,
//       //     });

//       //     // peer.sdpSemantics.
//       //     // config.sdpSemantics = "plan-b";

//       //     // const admin = new RTCPeerConnection(config);
//       //     // const users = new RTCPeerConnection(config);
//       //     // for (const track of stream.getTracks()) {
//       //     //   admin.addTrack(track, stream);
//       //     // }
//       //     // const offer = admin.createOffer();
//       //     // admin.setLocalDescription(offer);

//       //     // admin.onicecandidate = (e) => admin.addIceCandidate(e.candidate);
//       //     // users.onicecandidate = (e) => users.addIceCandidate(e.candidate);
//       //     // users.setRemoteDescription(offer);
//       //     // for (const track of stream.getTracks()) {
//       //     //   users.addTrack(track, stream);
//       //     // }
//       //     // const answer = users.createAnswer();
//       //     // users.setLocalDescription(answer);
//       //     // admin.setRemoteDescription(answer);

//       //     if (!isAdmin) {
//       //       getMeetingCode();
//       //     }
//       //     peer.on("signal", async (data) => {
//       //       if (isAdmin) {
//       //         let payload = {
//       //           id,
//       //           signalData: data,
//       //         };
//       //         await postRequest(`${BASE_URL}${SAVE_CALL_ID}`, payload);
//       //       } else {
//       //         socket.emit("code", { code: data, url }, (cbData) => {
//       //           console.log("code sent");
//       //         });
//       //       }
//       //     });
//       //     peer.on("data", (data) => {
//       //       clearTimeout(alertTimeout);
//       //       messegeListReducer({
//       //         type: "addMessage",
//       //         payload: {
//       //           user: "other",
//       //           msg: data.toString(),
//       //           time: Date.now(),
//       //         },
//       //       });

//       //       setMessegeAlert({
//       //         alert: true,
//       //         isPopup: true,
//       //         payload: {
//       //           user: "other",
//       //           msg: data.toString(),
//       //         },
//       //       });

//       //       // eslint-disable-next-line react-hooks/exhaustive-deps
//       //       alertTimeout = setTimeout(() => {
//       //         setMessegeAlert({
//       //           ...messegeAlert,
//       //           isPopup: false,
//       //           payload: {},
//       //         });
//       //       }, 10000);
//       //     });

//       //     peer.on("connect", () => {
//       //       console.log("peer connected");
//       //     });
//       //     peer.on("stream", (stream) => {
//       //       setStreamObj(stream);
//       //       let video = document.querySelector("video");
//       //       if ("srcObject" in video) {
//       //         videoRef.current.srcObject = stream;
//       //       } else {
//       //         videoRef.src = window.URL.createObjectURL(stream); // for older browsers
//       //       }

//       //       // video.play();
//       //       video
//       //         .play()
//       //         .then(() => {
//       //           console.log("video playing");
//       //         })
//       //         .catch((err) => {
//       //           console.log("video playback error");
//       //         });
//       //     });
//       //   })
//       //   .catch(() => {
//       //     console.log("error");
//       //   });
//     };
//     if (isAdmin) {
//       setMeetingInfoPopup(true);
//     }
//     initWebRTC();
//     socket.on("code", (data) => {
//       if (data.url === url) {
//         peer.signal(data.code);
//       }
//     });
//   }, [id, isAdmin, url]);

//   return (
//     <>
//       <div className="video-wrapper">
//         <video
//           className="video-container"
//           playsInline
//           muted
//           controls
//           autoPlay={true}
//           src=""
//         ></video>
//         <VideoCallHeader />
//         <VideoCallFooter />
//         {isAdmin && MeetingInfoPopup && (
//           <MeetingInfo setMeetingInfoPopup={setMeetingInfoPopup} url={url} />
//         )}
//         <Messenger />
//       </div>
//     </>
//   );
// };
// export default VideoCall;
