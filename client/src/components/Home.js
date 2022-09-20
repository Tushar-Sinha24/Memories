import React, { useEffect, useState } from 'react'
import './css/home.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import Card from './compo/Card';
import Form from './Form'
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  // const[post,setPost]=useState({id:'',title:'' , message: '', tags:'', photo:'', user:"" });

  // const getNotes = async()=>{
  //   await axios.get('http://localhost:5000/api/v1/post')
  //   .then((response)=>{
  //     console.log(response.data);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // }

  // useEffect(()=>{
  //   getNotes();
  // },[])


  return (
    <div>
      <div className="main-container">
      <div className="grid">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      <div className="post-form">
        <Form/>
      </div>
      </div>

      <div className="post">
      <AddCircleIcon className="post-btn" onClick={()=>navigate('/form')}></AddCircleIcon>
      </div>
    </div>
  )
}

export default Home