import React from 'react'
import './leftPane.css'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FeedIcon from '@mui/icons-material/Feed';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EventIcon from '@mui/icons-material/Event';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import MessageIcon from '@mui/icons-material/Message';
import FlagIcon from '@mui/icons-material/Flag';

export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
        
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
        <div className="pageListItem">
                <img src="/images/profile.jpg.jpg" alt="" className="pagePic" />
                <span className='pageName'>Yasindu Dahanayake</span>
            </div>
            <li className='leftPaneMenuItem'>
                <PeopleAltIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'>Friends</span>
            </li>
            <li className='leftPaneMenuItem'>
                <FeedIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'>Feeds</span>
            </li>
            <li className='leftPaneMenuItem'>
                <GroupsIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'>Groups</span>
            </li>
            <li className='leftPaneMenuItem'>
                <StoreIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'>MarketPlace</span>
            </li>
            <li className='leftPaneMenuItem'>
                <OndemandVideoIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'>Video</span>
            </li>
            <li className='leftPaneMenuItem'>
                <BookmarkIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'>Saved</span>
            </li>
            <li className='leftPaneMenuItem'>
                <FlagIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'>Pages</span>
            </li>
            <li className='leftPaneMenuItem'>
                <EventIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'>Events</span>
            </li>
            <li className='leftPaneMenuItem'>
                <VideogameAssetIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'>Games</span>
            </li>
            <li className='leftPaneMenuItem'>
                <MessageIcon className='leftPaneMenuIcon'/>
                <span className='leftPaneMenuText'>Messenger</span>
            </li>
            <hr></hr>
            <div className="pagesYouLike">

                 <h3>Your shortcuts</h3>
            </div>
            <div className="pageList">
            <div className="pageListItem">
                <img src="/images/jsb.jpg" alt="" className="pagePic" />
                <span className='pageName'>JSB Film Official</span>
            </div>
            <div className="pageListItem">
                <img src="/images/max.jpeg" alt="" className="pagePic" />
                <span className='pageName'>MAX Film page</span>
            </div>
            <div className="pageListItem">
                <img src="/images/hirutv.jpeg" alt="" className="pagePic" />
                <span className='pageName'>Hiru TV</span>
            </div>
            <div className="pageListItem">
                <img src="/images/nsbm.jpeg" alt="" className="pagePic" />
                <span className='pageName'>NSBM Green University</span>
            </div>
            <div className="pageListItem">
                <img src="/images/jsbenglish.jpeg" alt="" className="pagePic" />
                <span className='pageName'>JSB English Film</span>
            </div>

            </div>
        </div>


      </div>
    
    </div>
  )
}
