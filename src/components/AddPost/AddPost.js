import React from 'react'
import './addPost.css'
import PhotoIcon from '@mui/icons-material/Photo';
import VideocamIcon from '@mui/icons-material/Videocam';
import AddLocationIcon from '@mui/icons-material/AddLocation';

export default function AddPost() {
  return (
    <div className='addPost'>
       <div className="addPostContainer">
          <div className="addPostTop">
          <img src="/images/profile.jpg.jpg" alt="" className="addPostImg" />
          <input placeholder='What is on your mind,Yasindu?' type='text' className='addPostInput' />
          </div>
          <hr className='postHr'></hr>
          <div className="addPostBottom">
             <div className="addPostOptions">
             <div className="addPostOption">
                <PhotoIcon htmlColor='green' className='addPhoto'/>
                <span className='addPostOptionText'>Photo/Video</span>
            </div>
            <div className="addPostOption">
                <VideocamIcon htmlColor='red' className='addPhoto'/>
                <span className='addPostOptionText'>Live Video</span>
            </div>
            <div className="addPostOption">
                <AddLocationIcon htmlColor='blue' className='addPhoto'/>
                <span className='addPostOptionText'>Add Location</span>
            </div>
             </div>
          </div>
       </div>
    </div>
  )
}
