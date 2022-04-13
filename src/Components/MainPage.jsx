import { useRef } from "react";

function Main() {

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
    <div className="App">
      <div><video ref={videoRef} autoPlay muted></video></div>
    </div>
  );
}

export default Main;