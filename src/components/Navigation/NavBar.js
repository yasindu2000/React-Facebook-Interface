import React from 'react'
import './navBar.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StoreIcon from '@mui/icons-material/Store';
import GroupsIcon from '@mui/icons-material/Groups';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function NavBar() {
  return (
    
      <div className="navBarBox">
       
                  <div className="navBarLeft">
                      <div className="PIC">
                          <img src="/images/mainlogo.jpeg" alt="" className="profilePicImg" />
                      </div>
                  <div className="searchBarBox">
                     
                             <SearchIcon className='searchIcon'/>
                              <input type='text' name='searchInput' className='searchInput' placeholder='Search Facebook'/>
                    </div>
                 </div>
               <div className="navBarCenter">
                 <div className="navBarIcons">
                   <div className="navBarIcon">
                   <HomeIcon/>
                   </div>

                 </div>
                 <div className="navBarIcons">
                   <div className="navBarIcon">
                   <OndemandVideoIcon/>
                   </div>

                 </div>
                 <div className="navBarIcons">
                   <div className="navBarIcon">
                   <StoreIcon/>
                   </div>
                    
                 </div>
                 
                 <div className="navBarIcons">
                   <div className="navBarIcon">
                   <GroupsIcon/>
                   </div>
                    
                 </div>
                 <div className="navBarIcons">
                   <div className="navBarIcon">
                   <VideogameAssetIcon/>
                   </div>
                    
                 </div>
                 
                   

               </div>
             <div className="navBarRight">
                 <div className="navBarIconR">
                    <div className="navBarIconRs">
                    <WidgetsIcon/>
                    </div>

                 </div>
                 <div className="navBarIconR">
                    <div className="navBarIconRs">
                      <MessageIcon/>
                      <span className='iconTag'>3</span>
                    </div>

                 </div>
                 <div className="navBarIconR">
                    <div className="navBarIconRs">
                      <NotificationsIcon/>
                      <span className='iconTag'>6</span>
                    </div>

                 </div>
                 <div className="profilePic">
                    <div className="profile">
                    <img src="/images/profile.jpg.jpg" alt="" className="profileImg" />
                    </div>
                    
                 </div>
                 

             </div>
             
      </div>
      


   
  )
}
