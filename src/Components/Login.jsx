import { useRef, useState } from "react";
import { Link, Routes, Route } from 'react-router-dom';
import Main from "./MainPage"


function Login() {

  return (
    <>
      <div className="wrapper">
        <div className="formHeader">
          <p className="title">Sign in</p>
        </div>
        <form className="signUpForm">
          <input className="signUpInput" placeholder="UserName"></input>
          <input className="signUpInput" type="password" placeholder="Password"></input>
          <Link to={"/mainpage"} className="signUpButton">Login
            {/* <button className="login button">Login</button> */}
          </Link>

          <Routes>
            <Route path="/mainpage" element={<Main />} />
          </Routes>
          {/* <button className="loginButton">Login</button> */}
        </form>
      </div>
    </>
  )
};

export default Login;