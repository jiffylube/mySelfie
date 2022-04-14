import "./Login.css"
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <button className="customButton" onClick={handleShow}>Login</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>Login</Modal.Header>
        <Modal.Body>
          <form>
            <input id="Username" placeholder="User name" />
            <input type="Password" placeholder="Password" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="customButton" onClick={handleClose}>Login</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;