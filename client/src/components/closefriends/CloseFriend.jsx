import './closefriend.scss'

function CloseFriend({users}) {
  return (
        <li className="friend">
          <img src={users.userphoto} alt="" className='friendsfrofilepicture'/>
          <span className="userName">{users.name}</span>
        </li>
    )
}

export default CloseFriend