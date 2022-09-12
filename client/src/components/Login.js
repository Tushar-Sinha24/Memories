import React from 'react'
import './css/login.css'
import {Link  } from "react-router-dom"

const Login = () => {
  return (
    <>
      <div className="center">
        <h2>Login</h2>
      
        <form>
       <div className="txt-field">
        <label>Username</label>
        <input type='text' name ='username' required />
       </div>
       <div className="txt-field">
        <label>Password</label>
        <input type='text' name ='password' required />
       </div>
       <div className="pass">Forgot Password?</div>
        <div className="submit">
          <input type="submit" value='Login'/>
        </div>
       <div className="signup_link">
        Not a member? <Link to="/signup">SignUp</Link>
       </div>

     </form>
   </div>

    </>
  )
}

export default Login

