import "./Signup.css"

function Signup() {

  return (
    <div class="wrapper">
      <h1 class="title"> Sign up here </h1>
      <input id="Firstname" placeholder="First name"></input>
      <input id="Lastname" placeholder="Last name"></input>
      <input type="Email" placeholder="Email"></input>
      <input id="Username" placeholder="User name"></input>
      <input type="Password" placeholder="Password" />
      <input type="Password" placeholder="Confirm Password" />
      {/* <input type="Backend" placeholder="Backend" /> */}
      <button type="submit">Submit</button>
    </div>
  )

}

export default Signup