import React from 'react'
import './rightPane.css'
import SearchIcon from '@mui/icons-material/Search';

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
       <div className="rightPaneContainer">
          <div className="addvertesement">
            <span className='sponsored'>Sponsored</span>
            <img src="/images/sponsored.png" alt="" className="addImg" />
          </div>
          <div className="rightHR01">
          <hr></hr>
          </div>
          <div className="birthdatText">
               <span className='birthday'>Birthdays</span>
          </div>
          
          <div className="birthdayCardContainer">
            <img src="/images/birthdaycard.png" alt="" className="birthdayImg" />
            <span className='birthdaycardText'><b>Pasindu Munasinghe</b> and <b>6 others</b> have their birthdays today.</span>
          </div>
          <div className="rightHR02">
          <hr></hr>
          </div>
          <div className="contactContainer">
          <div className="Contact">
               <span className='friendContact'>Contacts</span>
               <div className="contactRight">
               <SearchIcon className='contactSearch'/>
               <span className='contactDot'>...</span>
               </div>
               </div>

                
          </div>
          <div className="friendList">
            <div className="onlineFriend">
              <div className="onlineFriendImgContainer">
                <img src="/images/friend1.jpeg" alt="" className="onlineFriendImg" />
                <span className='onlineStatus'></span>
              </div>
              <span className='onlineFriendName'>Kasun Maduranga</span>

            </div>
            <div className="onlineFriend">
              <div className="onlineFriendImgContainer">
                <img src="/images/friend2.jpg" alt="" className="onlineFriendImg" />
                <span className='onlineStatus'></span>
              </div>
              <span className='onlineFriendName'>Heshan Dananjaya</span>

            </div>
            <div className="onlineFriend">
              <div className="onlineFriendImgContainer">
                <img src="/images/friend3.avif" alt="" className="onlineFriendImg" />
                <span className='onlineStatus'></span>
              </div>
              <span className='onlineFriendName'>Pasindu Siriwardana</span>

            </div>
            <div className="onlineFriend">
              <div className="onlineFriendImgContainer">
                <img src="/images/friend4.jpeg" alt="" className="onlineFriendImg" />
                <span className='onlineStatus'></span>
              </div>
              <span className='onlineFriendName'>Harsha Madushan Silva</span>

            </div>
            <div className="onlineFriend">
              <div className="onlineFriendImgContainer">
                <img src="/images/friend5.jpeg" alt="" className="onlineFriendImg" />
                <span className='onlineStatus'></span>
              </div>
              <span className='onlineFriendName'>Kasun Kemal Hettiarachchi</span>

            </div>

          </div>
       </div>
      
    </div>
  )
}
