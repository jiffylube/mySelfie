import "./MainPage.css"
import { useRef } from "react";

function Main() {

  const videoRef = useRef(null);

  function startVideo() {
    navigator.mediaDevices
      .getUserMedia({ video: {} })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  startVideo();

  return (
    <div className="wrapper">
      <video className="webcam" ref={videoRef} autoPlay muted></video>
      <button className="capture">Capture</button>
    </div>
  );
}

export default Main;