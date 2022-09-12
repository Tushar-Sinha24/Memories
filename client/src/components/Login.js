import React, { useState } from 'react'
import './css/login.css'
import { Link , useNavigate} from "react-router-dom";
const axios = require('axios');

const Login = () => {
  const navigate = useNavigate();
  const[ credential , setCredential] =useState({email:'' , password :''});
  let res=[];

  const handleLogin= async (e) => {
    e.preventDefault();
    
    await axios.post('http://localhost:5000/api/v1/auth/login', {
      email: credential.email,
      password: credential.password
    })
    .then( (response)=> {
      res=response.data
    })
    .catch((error)=> {
      console.log(error);
    });
    if(res.success){
      localStorage.setItem('token',res.token);
      alert("Successfully Loged in","success");
      navigate('/')
    }
    else{
      alert("User Not Found","danger")
      
    }
    
  }
  

  const onChange =(e)=>{
    setCredential({...credential , [e.target.name] : e.target.value})
  }

  return (
    <>
      <div className="center">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="txt-field">
            <label>Username</label>
            <input type='text' name='email' value={credential.email} onChange={onChange} required />
          </div>
          <div className="txt-field">
            <label>Password</label>
            <input type='text' name='password' value={credential.password} onChange={onChange} required />
          </div>
          <div className="pass">Forgot Password?</div>
          <div className="submit">
            <input type="submit" value='Login' />
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

