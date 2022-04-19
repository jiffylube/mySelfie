import "./Signup.css"
import { useNavigate } from "react-router-dom"
import axios from "axios";

function Signup() {

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
        if (!emailArray.includes(email) && ![fname, lname, email, password].includes(null)) {
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
      })
  }

  return (
    <div className="wrapper">
      <div className="formHeader">
        <p className="title"> Sign up </p>
        <p className="titleText">It's quick and easy.</p>
      </div>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <input className="signUpInput" id="Firstname" placeholder="First name" />
        <input className="signUpInput" id="Lastname" placeholder="Last name" />
        <input className="signUpInput" type="Email" placeholder="Email - this will be your login" />
        <input className="signUpInput" type="Password" placeholder="New password" />
        <input className="signUpButton" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Signup