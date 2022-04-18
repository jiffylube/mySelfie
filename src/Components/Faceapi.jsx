// Importing dependencies
import React, { useRef, useEffect, useState } from "react"
import './Faceapi.css'

// Function
function Faceapi({currentEmail}) {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  // Enable camera
  const getVideo = () => {
    navigator.mediaDevices.getUserMedia({
      video: {width: 1920, height: 1080}
    })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error(err);
    })
  }

  useEffect(() => {
    getVideo();
  }, [videoRef])

  // Take photo
  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9)
    
    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
  }

  useEffect(() => {
    console.log(currentEmail);
  })

  return (
    <div>
      <div className="camera">
        <video ref={videoRef}></video>
        <button onClick={takePhoto}>SNAP!</button>
      </div>
      <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
        <canvas ref={photoRef}></canvas>
        <button>CLOSE!</button>
      </div>
    </div>
  )
}

// Export
export default Faceapi