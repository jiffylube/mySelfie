import "./Login.css"
import { useRef, useState } from "react";
import { useNavigate, Link, Routes, Route } from 'react-router-dom';
import Main from "./MainPage"
import axios from "axios";



function Login({ setCurrentEmail }) {


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
          <input className="loginInput" placeholder="Username"></input>
          <input className="loginInput" type="password" placeholder="Password"></input>
          <input className="loginButton" type="submit"/>
        </form>

      </div>
    </>
  )
};

export default Login;