import "./Login.css"
import { useRef, useState } from "react";
import { Link, Routes, Route } from 'react-router-dom';
import Main from "./MainPage"


function Login() {

  return (
    <>




      <div className="modal">
        <div className="modalContent">
          <div className="modal-header">
            <h2>Sign in</h2>
          </div>
          <form className="modal-body">
            <input className="inputBox" placeholder="UserName"></input>
            <input className="inputBox" type="password" placeholder="Password"></input>
          </form>
          <div className="modal-footer">
            <Link to={"/mainpage"} className="login button">Login
              {/* <button className="login button">Login</button> */}
            </Link>

            <Routes>
              <Route path="/mainpage" element={<Main />} />
            </Routes>
            {/* <button className="loginButton">Login</button> */}
          </div>
        </div>
      </div>
    </>
  )
};

export default Login;