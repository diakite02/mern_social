import './rightbar.scss'
import Onlinefriend from '../onlineFriend/Onlinefriend'
import{users} from "../../data"

const RightbarHome=()=>(
  <div className='rightbar'>
      <div className="rightBarrTop">

        <div className="rightbarTopBirthday">
          <img src="personne/birthday1.jpg" alt="" 
          className="birthday" />
          <span 
          className="birthdaynotification">
            3 autres personnes on les <strong>Anniversaires</strong>  aujourd'huit
          </span>
        </div>
        <div className="rightbarBottomBirthday">
          <img src="personne/birthday.jpg" alt="" 
          className='rightbarBottomBirthdayImg' />
        </div>
      </div>
        <h1 className='rightBarOnligesFriends'>
        les amis en lignes
        </h1>
        <ul className="onlineFriendList">
          {
            users.map((u)=>(
            <Onlinefriend users={u} key={u.id}/>
            ))
          }
          
        </ul>
    </div>
)
const RightbarProfile=()=>{

  return (
    
  <div className='rightbar'>
    <h3 className='rightbartile'>User information</h3>
    <div className="rigtbarInfo">
      <div className="righbarInfoItem">
        <span className="rightbarInfoKey">city :</span>
        <span className="rightbarInfoValeur">abidjan</span>
      </div>
      <div className="righbarInfoItem">
        <span className="rightbarInfoKey">country :</span>
        <span className="rightbarInfoValeur">Cote d'Ivoire</span>
      </div>
      <div className="righbarInfoItem">
        <span className="rightbarInfoKey">relationship:</span>
        <span className="rightbarInfoValeur">Celibataire</span>
      </div>
    </div>
    <h4 className='rightbartile'>Les suggestion d'Amis</h4>
    <div className="rihgtbarFollowingFriends">
      <div className="rihgtbarFollowingFriend">
        <img src="personne/8.jpg" alt="" className="friendPP" />
        <span className="followingFriendName">diakite ibrahim</span>
      </div>
      <div className="rihgtbarFollowingFriend">
        <img src="personne/1.jpg" alt="" className="friendPP" />
        <span className="followingFriendName">diakite ibrahim</span>
      </div>
      <div className="rihgtbarFollowingFriend">
        <img src="personne/6.jpg" alt="" className="friendPP" />
        <span className="followingFriendName">diakite ibrahim</span>
      </div>
      <div className="rihgtbarFollowingFriend">
        <img src="personne/4.jpg" alt="" className="friendPP" />
        <span className="followingFriendName">diakite ibrahim</span>
      </div>
      <div className="rihgtbarFollowingFriend">
        <img src="personne/8.jpg" alt="" className="friendPP" />
        <span className="followingFriendName">diakite ibrahim</span>
      </div>
      <div className="rihgtbarFollowingFriend">
        <img src="personne/4.jpg" alt="" className="friendPP" />
        <span className="followingFriendName">diakite ibrahim</span>
      </div>
      <div className="rihgtbarFollowingFriend">
        <img src="personne/3.jpg" alt="" className="friendPP" />
        <span className="followingFriendName">diakite ibrahim</span>
      </div>
      <div className="rihgtbarFollowingFriend">
        <img src="personne/2.jpg" alt="" className="friendPP" />
        <span className="followingFriendName">diakite ibrahim</span>
      </div>
    </div>
  </div>
)
}
function Rightbar({profile}) {
  return (
    <>
      {profile?<RightbarProfile/>:<RightbarHome/>}
    </>
  )
}

export default Rightbar