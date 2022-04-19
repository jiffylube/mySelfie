import "./Signup.css"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useRef } from "react";

function Signup() {

  const firstnameRef = useRef(null)
  const lastnameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  let navigate = useNavigate();
  const url = 'https://backend-fr.herokuapp.com/api/users'

  function handleSubmit(e) {
    e.preventDefault();
    //this format pulls values from form inputs
    let fname = e.target[0].value;
    let lname = e.target[1].value;
    let email = e.target[2].value;
    let password = e.target[3].value;

    let emailArray = [];

    axios.get(url)
      .then((results) => {
        results.data.forEach((user) => {
          emailArray.push(user.email)
        })
      })
      .then(() => {
        if (!emailArray.includes(email) && fname && lname && email && password) {
          // create new user object
          axios.post(url, {
            email: email,
            firstname: fname,
            lastname: lname,
            password: password,
          })
            .then(function (response) {
              console.log(response);
              alert('Account Created');
              navigate('/Login');
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        else {
          if (!fname)
            firstnameRef.current.className = "signUpInput blank"
          if (!lname)
            lastnameRef.current.className = "signUpInput blank"
          if (!email)
            emailRef.current.className = "signUpInput blank"
          if (!password)
            passwordRef.current.className = "signUpInput blank"
        }
      })
  }

  return (
    <div className="wrapper">
      <div className="formHeader">
        <p className="title"> Sign up </p>
        <p className="titleText">It's quick and easy.</p>
      </div>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <input className="signUpInput" id="Firstname" ref={firstnameRef} placeholder="First name" />
        <input className="signUpInput" id="Lastname" ref={lastnameRef} placeholder="Last name" />
        <input className="signUpInput" type="Email" ref={emailRef} placeholder="Email - this will be your login" />
        <input className="signUpInput" type="Password" ref={passwordRef} placeholder="New password" />
        <input className="signUpButton" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Signup