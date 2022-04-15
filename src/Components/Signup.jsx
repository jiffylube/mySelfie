import "./Signup.css"
import { Link, Routes, Route } from "react-router-dom"
import Landing from "./Landing"

// add onSubmit to form tag
// prvent default form behavior

function Signup() {

  return (
    <div className="wrapper">
      <form className="signUpForm">
        <h1 className="title"> Sign up </h1>
        <input className="signUpInput" id="Firstname" placeholder="First name" />
        <input className="signUpInput" id="Lastname" placeholder="Last name" />
        <input className="signUpInput" type="Email" placeholder="Email" />
        {/* <input id="Username" placeholder="User name" /> */}
        <input className="signUpInput" type="Password" placeholder="Password" />
        <input className="signUpInput" type="Password" placeholder="Confirm Password" />
        {/* <input type="Backend" placeholder="Backend" /> */}
        <Link to={"/"} className="login button">
              <button>Submit</button>
        </Link>
      </form>
    </div>
  )

}

export default Signup