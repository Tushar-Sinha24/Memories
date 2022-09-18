import React from 'react'
import './css/postForm.css'

const form = () => {
    return (
        <div>
            <div className="post-container">
            <form onSubmit={handlePost}>
          <div className="post-text">
            <label>Title</label>
            <input type='text' name='title' value='' required />
          </div>
          <div className="post-text">
            <label>Description</label>
            <input type='text' name='desc'  required />
          </div>

          <div className="post-text">
            <label>Mood</label>
            <select  name="mood">
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

export default form
