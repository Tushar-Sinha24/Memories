import React , { useState }  from 'react'
import './css/login.css'
import { useNavigate} from "react-router-dom";
const axios = require('axios');

const SignUp = () => {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({name:'' ,  email: '', password: '' });
  let res = [];

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(credential)
    await axios.post('http://localhost:5000/api/v1/auth/register', {
      name:credential.name,
      email: credential.email,
      password: credential.password
    })
      .then((response) => {
        res = response.data
      })
      .catch((error) => {
        console.log(error);
      });
    if (res.success) {
      localStorage.setItem('token', res.token);
      alert("Successfully signed in", "success");
      navigate('/')
    }
    else {
      alert("Issue", "danger")

    }

  }


  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="center">
        <h2>Register Yourself</h2>
        <form onSubmit={handleSignup}>
          <div className="txt-field">
            <label>Full Name</label>
            <input type='text' onChange={onChange} name='name' required />
          </div>
          <div className="txt-field">
            <label>Email</label>
            <input type='text' onChange={onChange} name='email' required />
          </div>
          <div className="txt-field">
            <label>Password</label>
            <input type='text' onChange={onChange} name='password' required />
          </div>
          <div className="submit" style={{ marginBottom: "30px" }}>
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp