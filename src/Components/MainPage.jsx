import "./MainPage.css"
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as faceapi from 'face-api.js'

function Main() {

  // Starting video
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

  // Calling models to run in paralel
  
 
  return (
    <div>
      <div>
        <Link to={"/"}>Logout</Link>
      </div>
      <div className="wrapperMain">
        <div className="leftMain">
          <video className="webcamMain" ref={videoRef} autoPlay muted></video>
          <button className="captureMain">Capture</button>
        </div>
        <div className="rightMain">
          <div className="snapsMain">
            <div className="snapMain"></div>
            <div className="snapMain"></div>
            <div className="snapMain"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;