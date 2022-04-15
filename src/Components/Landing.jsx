import "./Landing.css";
import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route, Link } from "react-router-dom";


function Landing() {

  return (
    <Route path="/">
      <div className="landing-page">
        <div className="nav">
          <div className="title">Placeholder</div>

          <div className="buttons">
            <Link to={"/signup"}>
              <button className="signup button">Sign Up</button>
            </Link>

            <Link to={"/login"}>
              <button className="login button">Login</button>
            </Link>

            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>

        </div>
        <div className="lower">
          <div className="gallery">
            <div className="sample-face"></div>
            <div className="sample-face"></div>
            <div className="sample-face"></div>
            <div className="sample-face"></div>
            <div className="sample-face"></div>
            <div className="sample-face"></div>
          </div>
          <div className="info">
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="creator">
              Made by Jeff, Rodrigo, and Eric - View on <a href="https://github.com/">Github</a>
            </div>
          </div>
        </div>
      </div>
    </Route>
  )
}

export default Landing;