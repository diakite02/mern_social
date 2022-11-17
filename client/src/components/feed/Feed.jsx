import Post from '../posts/Post'
import Share from '../share/Share'
import  './feed.scss'
import{userPost} from "../../data"

function feed() {
  return (
    <div className='feed'>
      <Share/>
      {
       userPost.map((p)=>(<Post key={p.id} posts={p}/>))
      }
        
    </div>
  )
}

export default feed