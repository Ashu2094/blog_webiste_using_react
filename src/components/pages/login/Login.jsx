import { Link } from "react-router-dom"
import "./login.css"

function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form  className="loginForm">
        <label >Email</label>
        <input type="email" placeholder="abc@gmail.com" className="loginInput"/>
        <label >Password</label>
        <input type="password" placeholder="Enter your Password" className="loginInput"/>
        <button className="loginButton">Login</button>

      </form>

      <button className="loginRegisterButton">Register</button>
      <Link className="link" to="/register">Register</Link>
    </div>
  )
}

export default Login
