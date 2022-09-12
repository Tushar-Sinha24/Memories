import React from 'react'
import './css/login.css'

const Login = () => {
  return (
    <>
      <div className="center">
        <h2>Register Yourself</h2>
     <form>
     <div className="txt-field">
        <label>Full Name</label>
        <input type='text' name ='name' required />
       </div>
       <div className="txt-field">
        <label>Email</label>
        <input type='text' name ='username' required />
       </div>
       <div className="txt-field">
        <label>Password</label>
        <input type='text' name ='password' required />
       </div>
       <div className="submit" style={{marginBottom : "30px"}}>
        <input type="submit" />
       </div>
     </form>
   </div>
    </>
  )
}

export default Login