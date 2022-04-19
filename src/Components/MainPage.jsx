// Importing dependencies
import React, { useRef, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import './MainPage.css'
import axios from "axios"

// Function
function Faceapi({ currentEmail }) {
  let current = new Date();
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  let navigate = useNavigate();

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

    axios.post("https://backend-fr.herokuapp.com/api/expressions", {
      datetime: current.toLocaleString(),
      email: currentEmail
    })
    .then(res => console.log(res))
  }

  useEffect(() => {
    console.log(currentEmail);
  })

  let exitApp = () => {
    navigate("/");
  }

  return (
    <div className="viewPort">
      <div className="camera">
        <video className="displayArea" ref={videoRef}></video>
        <button className="pictureButton" onClick={takePhoto}>SNAP!</button>
      </div>
      <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
        <canvas className="theCanvas" ref={photoRef}></canvas>
        <button className="pictureButton" onClick={exitApp}>CLOSE APP!</button>
      </div>
    </div>
  )
}

// Export
export default Faceapi