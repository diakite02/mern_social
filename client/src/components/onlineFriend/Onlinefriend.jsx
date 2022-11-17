import './onlinefriend.scss'

function Onlinefriend({users}) {
  return (
    <li className="onlinefriends">
            <div className="profile-greendDot">
              <img src={users.userphoto} alt="" 
              className='onlinefriendProfile'/>
              <span className="greenDot"></span>
            </div>
            <span className="friendOnlineName">{users.name}</span>
    </li>
  )
}

export default Onlinefriend