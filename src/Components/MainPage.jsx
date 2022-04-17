import "./MainPage.css"
import { useRef } from "react";
import { Link } from "react-router-dom";

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