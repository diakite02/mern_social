import './sidebar.scss'
import { Book, Chat, Event, Group, School, VideoCallSharp, Work, RssFeedOutlined } from '@mui/icons-material';
import CloseFriend from '../closefriends/CloseFriend';
import { users } from "../../data";

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className="sidebarList">
        <li className='sidebarItem'>
           <RssFeedOutlined/> 
           <span className="sidebarIconText">Feed</span>
        </li>
        <li className='sidebarIcon'>
           <Chat/> 
           <span className="sidebarIconText">Discussion</span>
        </li>
        <li className='sidebarIcon'>
           <VideoCallSharp/> 
           <span className="sidebarIconText">Videos</span>
        </li>
        <li className='sidebarIcon'>
           <Group/> 
           <span className="sidebarIconText">Groups</span>
        </li>
        <li className='sidebarIcon'>
           <Book/> 
           <span className="sidebarIconText">book mark</span>
        </li>
        <li className='sidebarIcon'>
           <Work/> 
           <span className="sidebarIconText">Jobs</span>
        </li>
        <li className='sidebarIcon'>
           <Book/> 
           <span className="sidebarIconText">book mark</span>
        </li>
        <li className='sidebarIcon'>
           <Event/> 
           <span className="sidebarIconText">Eventement</span>
        </li>
        <li className='sidebarIcon'>
           <School/> 
           <span className="sidebarIconText">Courses</span>
        </li>
      </ul>
      <hr className="hrbetwenlist" />
      <button className='sidebarbutton'>hire me</button>
      <ul className="friendslist">
        {users.map(u=>(
          <CloseFriend key={u.id} users={u}/>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar