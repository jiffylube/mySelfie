import "./App.css";
import { useRef } from "react";
// import faceapi from "face-api.js";
import Main from "./Components/MainPage";

function App() {
  const videoRef = useRef(null);

  // Promise.all([
  //   faceapi.nets.tnyFaceDetector.loadFromUri("/models"),
  //   faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  //   faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  //   faceapi.nets.faceExpressionNet.loadFromUri("/models"),
  // ]);

  function startVideo() {
    navigator.mediaDevices
      .getUserMedia({ video: {} })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.err("error", err);
      });
  }

  startVideo();

  return (
    // <div className="App">
    //   <div>{/* <video ref={videoRef} autoPlay muted></video> */}</div>
    // </div>
    <Main />
  );
}

export default App;
