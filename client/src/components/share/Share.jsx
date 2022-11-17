import  './share.scss'
import { EmojiEmotions, GpsFixed, Label, VideoCallOutlined } from '@mui/icons-material';

function Share() {
  return (
    <div className='share'>
        <div className="shareTop">
            <img src="personne/3.jpg" alt="" 
            className='shareProfilePicture' />
            <input placeholder='que pensez vous?'
             className='shareTopinput' />
        </div>
        <hr className="shareHr" />
        <div className="shareBoutom">
            <div className="shareIconsContainer">
                <div className="shareIcon-text">
                    <Label className='shareIcon'/>
                    <span className="shareText">tag</span>
                </div>
                <div className="shareIcon-text">
                    <EmojiEmotions className='shareIcon'/>
                    <span className="shareText">feelling</span>
                </div>
                <div className="shareIcon-text">
                    <GpsFixed className='shareIcon'/>
                    <span className="shareText">Localition</span>
                </div>
                <div className="shareIcon-text">
                    <VideoCallOutlined className='shareIcon'/>
                    <span className="shareText">videos or photos</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share