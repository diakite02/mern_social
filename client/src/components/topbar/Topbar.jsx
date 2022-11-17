import './topbar.scss'
import { Chat, NotificationAdd, Person, Search } from "@mui/icons-material";

function Topbar() {
  return (
    <div className='Topbar'>
      <div className="topbarLeft">
        <span className="topbarlogo">IvoireCOde</span>
      </div>

      <div className="topbarcenter">
            <Search/>
            <input type="search" className="topbarsearchbar" placeholder='chercher vos amis , photos ou videos'/>
      </div>

      <div className="topbarRight">

        <div className="topLinks">
            <span className="toplink">Accueil</span>
            <span className="toplink">Discussion</span>
        </div>

        <div className="topbarIcons">
          <div className="topIcon">
            <Person className='topSingleIcon'/>
            <span className="topbarIconspan">1</span>
          </div>
          <div className="topIcon">
            <NotificationAdd className='topSingleIcon'/>
            <span className="topbarIconspan">2</span>
          </div>
          <div className="topIcon">
            <Chat className='topSingleIcon'/>
            <span className="topbarIconspan">3</span>
          </div>  
        </div>
        <div className="topbarProfile">
          <img src="personne/5.jpg" alt="" 
          className="topbarprofileImg" />
        </div>
          
      </div>


    </div>
  )
}

export default Topbar