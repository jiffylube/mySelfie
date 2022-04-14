import "./Landing.css"
import Login from "./Login"

function Landing() {

  return (
    <div className="landing-page">
      <div className="nav">
        <div className="title">Placeholder</div>
        <div className="buttons">
          <button className="signup button">Sign Up</button>
          <Login />
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
  )
}

export default Landing;