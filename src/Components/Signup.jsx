import "./Signup.css"

function Signup() {

  return (
    <div className="wrapper">
      <h1 className="title"> Sign up </h1>
      <form>
        <input id="Firstname" placeholder="First name" />
        <input id="Lastname" placeholder="Last name" />
        <input type="Email" placeholder="Email" />
        <input id="Username" placeholder="User name" />
        <input type="Password" placeholder="Password" />
        <input type="Password" placeholder="Confirm Password" />
        {/* <input type="Backend" placeholder="Backend" /> */}
        <button className="confirm" type="submit">Submit</button>
      </form>
    </div>
  )

}

export default Signup