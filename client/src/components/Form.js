import React, { useState } from 'react'
import './css/postForm.css'
import axios from 'axios'

const Form = () => {
  const [post , setPost] = useState({title:'', message:'' , tag:''});
  
  // const [fileName , setFileName] = useState("");
  
  const Post=async (e)=>{
    console.log(post)
    e.preventDefault();
    await axios.post('http://localhost:5000/api/v1/post' ,post)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }

  const onChange=(e)=>{
    setPost({...post, [e.target.name] : e.target.value})
  }

    return (
        <div>
            <div className="post-container">
            <form onSubmit={Post} >
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
            <select  name="tag" value='this.state.value' onChange={onChange}>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Emotional">Emotional</option>
                <option value="Love">Love</option>
            </select>
          </div>

          <div className="post-text">
            
            <input type='file' name='file'  required />
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
