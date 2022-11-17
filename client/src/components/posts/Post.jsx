import { Chat, HeartBrokenOutlined, MoreVert } from '@mui/icons-material'
import './post.scss'
import { users } from "../../data";
import { useState } from "react";


function Post({posts}) {
    // statement
    const [likes, setLikes] = useState(posts.Likes);
    const [isliked, setIsliked] = useState(false);
  
    
    // clickevent likes
    const handleClickPost =()=>{
      setLikes(isliked? likes-1:likes+1);
      setIsliked(!isliked)
    }
    
  return (
    <div className='post'>
        <div className="postTop">
            <div className="postTopLeft">
                <img src={users.filter(u=>(u.id===posts.userId))[0].userphoto} alt="" 
                className='postfrofilepicture' />
                <span className="postUserName">{users.filter(u=>(u.id===posts.userId))[0].name}</span>
                <span className='postTime'>`il ya {posts.date} min`</span>
            </div>

        <div className="postTopRight">
            <MoreVert/>
        </div>
        </div>
            <div className="postCenter">
                <span className="postText">{posts.desc}</span>
                <img src={ posts.postImg} alt="" 
                className="postedImage" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
               <HeartBrokenOutlined htmlColor='white'
               className='postLikeButton'onClick={handleClickPost}/> 
               <span className='likes' >{likes+" likes"}</span>
            </div>
            
            <div className="postRight">
                <div className="postRightCommentIcon">
                    <Chat htmlColor='blue'/>
                    <span className="comments">`{ posts.coments} comments`</span>
                </div>
            </div>

           
        </div>
    </div>
  )
}

export default Post