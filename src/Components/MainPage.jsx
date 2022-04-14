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
      <div className="left">
        <video className="webcam" ref={videoRef} autoPlay muted></video>
        <button className="capture">Capture</button>
      </div>
      <div className="right">
        <div className="snaps">
          <div className="snap"></div>
          <div className="snap"></div>
          <div className="snap"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;