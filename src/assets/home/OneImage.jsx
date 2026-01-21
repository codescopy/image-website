import {useState} from 'react'
import { shortDescription } from '../../../utils/MakeItInteractive/description'
import {NavLink} from 'react-router-dom'
import { ShareApps } from "./ShareApps"

export function OneImage({imageItem}) {
     const [openShare, setOpenShare] = useState(false)

     const ShareImage = () => {
           setOpenShare(!openShare ? true : false)
           
      }
  return (
    <>
      <div className="image-container">
        <NavLink className="conte-image" to={`/photo-view/${imageItem.id}`}>
          <img className="image-alone  js-image" src={imageItem.image} />
        </NavLink>
        <NavLink className="conte-descri" to={`/photo-view/${imageItem.id}`}>
          <p className="village-description js-village-description">
            {shortDescription(imageItem.description)}
          </p>
        </NavLink>
        <div className="conte-interacts interacts">
          <span className="comment">
            <i className="fa-regular cursor-pointer fa-comment"></i>
            &nbsp;&nbsp;comment
          </span>
          <span onClick={ShareImage} className="share js-share">
            <i className="fa-solid cursor-pointer fa-share"></i>
            &nbsp;&nbsp;share
          </span>
          {openShare && <ShareApps ShareImage={ShareImage} /> }
          <span className="i-like-it">
            <i className="fa-regular cursor-pointer fa-thumbs-up"></i>
            &nbsp;&nbsp;like
          </span>
        </div>

        <p className="conte-visi-butt visit-button">Download</p>

        <div className="sharing"></div>
      </div>
    </>
  );
}
