// function Login() {

//   return (
//     <div>
//       <input type="Username" placeholder="Username"></input>
//       <input type="Password" placeholder="Password" />
//     </div>
//   )

// }

// export default Login


// -------------------------------------------------


import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from "bootstrap";

function Login() {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <button onClick={handleShow}>
      Login
      <Modal className="Modal" show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{monName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{monDes}</Modal.Body>
        <Modal.Body>Monster Type : {monType}</Modal.Body>
        <Modal.Body>Species : {monSpecies}</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </button>
  )
}

export default Login