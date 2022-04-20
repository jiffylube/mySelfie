import "./Landing.css";
import "./media.css";
import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route, Link } from "react-router-dom";


function Landing() {

  return (
    <div className="landing-page">
      <div className="nav">
        <div className="title">mySelfie</div>

        <div className="buttons">
          <Link to={"/signup"}>
            <button className="landingButtons">Sign Up</button>
          </Link>

          <Link to={"/login"}>
            <button className="landingButtons">Login</button>
          </Link>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

      </div>

      <div className="description">
        Description: Dont waste your time choosing photos. Take a picture with mySelfie
      </div>


      <div className="gallery">
        <div className="sample-face webcam1"></div>
        <div className="sample-face webcam2"></div>
        <div className="sample-face webcam3"></div>
        <div className="sample-face webcam4"></div>
        <div className="sample-face webcam5"></div>
        <div className="sample-face webcam6"></div>
      </div>

      <div className="creator">
        Made by Jeff, Rodrigo, and Eric - View on <a href="https://github.com/">Github</a>
      </div>
    </div>
  )
}

export default Landing;