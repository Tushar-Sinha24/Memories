import React, { useState } from 'react'
import './css/postForm.css'

const Form = () => {
  const [post , setPost] = useState({title:'', message:'' , tag:''});
  
  // const [fileName , setFileName] = useState("");
  


  const Post=async (e)=>{
    console.log(post)
    console.log(`Bearer ${localStorage.getItem('token')}`)
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/v1/post', {
      method: 'POST',
       headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(post) 
    });
    const json=await response.json(); 
    console.log(json)


  //   await axios.post('http://localhost:5000/api/v1/post' ,{
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${localStorage.getItem('token')}`
  //     },
  //     post
  // }) 
  //   .then(res=>console.log(res.data))
  //   .catch(err=>console.log(err))
  }

  const onChange=(e)=>{
    setPost({...post, [e.target.name] : e.target.value})
  }

    return (
        <div>
            <div className="post-container">
            <form onSubmit={Post} enctype="multipart/form-data" >
          <div className="post-text">
            <label>Title</label>
            <input type='text' name='title' onChange={onChange} required />
          </div>
          <div className="post-text">
            <label>Description</label>
            <input type='text' name='message' onChange={onChange} required />
          </div>
          <div className="post-text">
            <label>Mood</label>
            <select  name="tag"  onChange={onChange}>
            <option value="">Select a Tag</option>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Emotional">Emotional</option>
                <option value="Love">Love</option>
            </select>
          </div>

          <div className="post-text">
            
            <input type='file' name='user_file' required />
          </div>
          
          <div className="post-btn">
            <input type="submit" value='Post' />
          </div>
          
        </form>
            </div>
        </div>
    )
}

export default Form
