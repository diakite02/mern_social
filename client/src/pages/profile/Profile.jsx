import Topbar from '../../components/topbar/Topbar'
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar";
import './profile.scss';


function profile() {
  return (
    <div>
    <>
      <Topbar/>
      <div className="profile">
          <Sidebar/>

          <div className="profileTopRight">
              <div className="profileTopRightcover">
                  <img src="personne/2.jpg" alt="" 
                  className='imgCovert' />
                  <img src="./personne/5.jpg" alt="" 
                   className="propilePicture" />
              </div>
              <div className="profileInfo">
                    <div className='proileName'>Diakite bagaly</div>
                    <div className='proileActuelite'>SCHOOLING..</div>
              </div>
              <div className="profileTopBottom">
                  <Feed/>
                  <Rightbar profile/>
              </div>
          </div>
      </div>


    </>``
    </div>
  )
}

export default profile