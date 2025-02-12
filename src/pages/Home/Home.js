import React from 'react'
import NavBar from '../../components/Navigation/NavBar'
import LeftPane from '../../components/Leftpane/LeftPane'
import PostPane from '../../components/Postpane/PostPane'
import RightPane from '../../components/Rightpane/RightPane'
import './home.css'

function Home() {
  return (
    <div>
      

<NavBar></NavBar>

<div className="bottomContainer">
   <LeftPane></LeftPane>
   <PostPane></PostPane>
   <RightPane></RightPane>
</div>
    </div>
  )
}
export default Home