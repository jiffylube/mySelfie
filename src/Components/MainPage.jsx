// Importing dependencies
import React, { useRef, useEffect, useState } from "react"
import './MainPage.css'

// Function
function Faceapi({ currentEmail }) {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  // Enable camera
  const getVideo = () => {
    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { width: 1920, height: 1080 }
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
    <div className="viewPort">
      <div className="camera">
        <video className="displayArea" ref={videoRef}></video>
        <button className="pictureButton" onClick={takePhoto}>SNAP!</button>
      </div>
      <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
        <canvas className="theCanvas" ref={photoRef}></canvas>
        <button className="pictureButton">CLOSE!</button>
      </div>
    </div>
  )
}

// Export
export default Faceapi