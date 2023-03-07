import "./register.css"
import { Link } from "react-router-dom"

function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form  className="registerForm">
      <label >Username</label>
        <input type="text" placeholder="Enter your name" className="registerInput"/>
        <label >Email</label>
        <input type="email" placeholder="abc@gmail.com" className="registerInput"/>
        <label >Password</label>
        <input type="password" placeholder="Enter your Password" className="registerInput"/>
        <button className="registerButton">register</button>

      </form>

      <button className="registerLoginButton">Login</button>
      <Link className="link" to="/login">Login</Link>

    </div>
  )
}

export default Register
