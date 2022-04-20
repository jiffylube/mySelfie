import "./Login.css"
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login({ setCurrentEmail }) {

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  let accounts = [];
  let navigate = useNavigate();

  function handleSubmit(e) {

    e.preventDefault();

    let email = e.target[0].value;
    let password = e.target[1].value;
    let match = false;

    // get all accounts from api
    axios.get("https://backend-fr.herokuapp.com/api/users")
      .then((results) => {
        results.data.forEach((user) => {
          accounts.push(user)
        })
      })
      // see if email is in the users database
      .then(() => {
        accounts.forEach((account) => {
          // if email matches, check if password matches
          if (email === account.email) {
            if (password === account.password) {
              // if password matches, redirect to main page
              setCurrentEmail(email)
              console.log("valid account")
              match = true;
              navigate("/mainpage");
            }
          }
        })
        if (!match) {
          // otherwise say invalid username/pw
          console.log("invalid username/password")
          // add invalid class to highlight inputs
          usernameRef.current.className = "loginInput invalid"
          passwordRef.current.className = "loginInput invalid"
        }
      })
  }

  return (
    <>
      <div className="wrapper">
        <div className="formHeader">
          <p className="title">Log in</p>
        </div>
        <form className="loginForm" onSubmit={handleSubmit}>
          <input className="loginInput" ref={usernameRef} placeholder="Email"></input>
          <input className="loginInput" ref={passwordRef} type="password" placeholder="Password"></input>
          <input className="loginButton" type="submit" />
        </form>

      </div>
    </>
  )
};

export default Login;