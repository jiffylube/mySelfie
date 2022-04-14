import "./Login.css"
import { useRef, useState } from "react";


function Login() {

  return (
    <>
      <div className="modal">
        <div className="modalContent">
          <div className="modal-header">
            <h2>Sign in</h2>
          </div>
          <form className="modal-body">
            <input placeholder="UserName"></input>
            <input placeholder="Password"></input>
          </form>
          <div className="modal-footer">
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Login;