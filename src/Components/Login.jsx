import { useRef, useState } from "react";
import { useNavigate, Link, Routes, Route } from 'react-router-dom';
import Main from "./MainPage"
import axios from "axios";


function Login({setCurrentEmail}) {

  let accounts = [];
  let navigate = useNavigate();

  function handleSubmit(e) {

    e.preventDefault();

    // change to useState
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
          alert("invalid username/password")
        }
      })
  }

  return (
    <>     
      <div className="modal">
        <div className="modalContent">
          <div className="modal-header">
            <h2>Sign in</h2>
          </div>
          <form className="modal-body" onSubmit={handleSubmit}>
            <input className="inputBox" placeholder="UserName"></input>
            <input className="inputBox" type="password" placeholder="Password"></input>
            <input type="submit"></input>
          </form>
        </div>
      </div>
    </>
  )
};

export default Login;