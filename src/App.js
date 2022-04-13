import './App.css';
import { useRef } from 'react';

function App() {

  const videoRef = useRef(null);

  function startVideo() {
    navigator.mediaDevices.getUserMedia(
      { video: {} })
        .then(stream => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch(err => {
        console.err("error" , err)
      })
  }

  startVideo();

  return (
    <div className="App">

      <div>
          {/* <video ref={videoRef} autoPlay muted></video> */}
      </div>

    </div>
  );
}

export default App;
