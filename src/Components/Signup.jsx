import "./Signup.css"
import { Link } from "react-router-dom"

// add onSubmit to form tag
// prvent default form behavior

function Signup() {

  function handleSubmit(e) {
    e.preventDefault();
    //this format pulls values from form inputs
    let fname = e.target[0].value;
    let lname = e.target[1].value;
    let email = e.target[2].value;
    let password = e.target[3].value;

    console.log(fname, lname, email, password);
  }

  return (
    <div className="wrapper">
      <h1 className="title"> Sign up </h1>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <input className="signUpInput" id="Firstname" placeholder="First name" />
        <input className="signUpInput" id="Lastname" placeholder="Last name" />
        <input className="signUpInput" type="Email" placeholder="Email" />
        <input className="signUpInput" type="Password" placeholder="Password" />
        <input type="submit"></input>
        {/* <Link to={"/"} className="login button">
              <button>Submit</button>
        </Link> */}
      </form>
    </div>
  )
}

export default Signup