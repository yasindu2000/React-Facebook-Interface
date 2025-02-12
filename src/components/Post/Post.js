import React from 'react'
import './post.css'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import PublicIcon from '@mui/icons-material/Public';

export default function Post() {
  return (
    <div className='post'>
       <div className="postContainer">
          <div className="postTop">
            <img src="/images/postImgs.jpg" alt="" className="postImg" />
            <sapn className='postUserName'>Kasun Dissanayake</sapn>
            
            
          </div>
          <div className="postTimeShow">
            
         
          <span className='postTime'>5 min ago</span>
         
          </div>
          <div className="postCenter">
            <div className="postCaption">
              Hello I am Kasun Dissanayake......
            </div>
            <img src="/images/postImgs.jpg" alt="" className="postuploardImage" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img src="/images/like.png" alt="" className="reactionPic" />
              <img src="/images/love.png" alt="" className="reactionPic" />
              <img src="/images/haha.png" alt="" className="reactionPic" />
              <span className='likeCount'>Lakmal and 110 other</span>
              
            </div>
            <div className="postBottomRight">
              <span className='commentCount'>45 comments</span>
            </div>
            
          </div>
          <div className="bottomHR">
              <hr></hr>
            </div>
            
              
            </div>
            <div className="underBottom">
            <div className="postBottomIcon">
              <div className="bottomIcon">
                   <ThumbUpOutlinedIcon/>
                   <span className='bottomIconText'>Like</span>
              </div>
            <div className="postBottomIcon">
              <div className="bottomIcon">
                <ChatBubbleOutlineOutlinedIcon/>
              <span className='bottomIconText'>Comment</span>
              </div>
              
            </div>
            <div className="postBottomIcon">
              <div className="bottomIcon">
                <WhatsAppIcon/>
              <span className='bottomIconText'>Send</span>
              </div>
              
            </div>
            <div className="postBottomIcon">
              <div className="bottomIcon">
                 <ShareIcon/>
              <span className='bottomIconText'>Share</span>
              </div>
              
            </div>
            </div>
       </div>
    </div>
  )
}
