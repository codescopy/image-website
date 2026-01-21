import { useParams } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { imageList } from "../../../data/image-list";
import "./ViewPage.css";
import { Header } from "../header/Head";
import { Footer } from "../footer/Footer";

export function ViewPage() {
  const [openShow, setOpenShow] = useState(false)

  const { id } = useParams();
  const imageItem = imageList.find((imageItem) => imageItem.id === Number(id));
  console.log(imageItem);
  console.log(id);
  const theRestImageItems = imageList.filter(
    (imageItem) => imageItem.id !== Number(id),
  );

  const openShowFn = () => {
     setOpenShow(!openShow)
  }

  return (
    <>
      <Header />
      <section class="who-all-content">
        <div className="image-with-comment">
          <NavLink className="navelink">
            <img className="who-image " src={`../../${imageItem.image}`} />
          </NavLink>
          <div className="comment">
            <h2 className="comments">Comments</h2>

            <div className="profile-word-comm">

              <div className="user-comment">
                    <div className="profile">
                    <img className="user-image" src="/man-two.png" />
                    <h4 className="user-name">Ahmed</h4>
                    </div>
                    <p className="word-comment">
                    This image beautifully reflects culture and emotion, using colors and composition that
                    instantly attract attention and inspire thoughtful reflection today.
                    </p>
              </div>

            {openShow && (
                <>
               <div className="user-comment">
                    <div className="profile">
                        <img className="user-image" src="/woman-two.png" />
                        <h4 className="user-name">Fatima</h4>
                    </div>
                    <p className="word-comment">
                        I love how the details are clear and expressive, making the message powerful,
                        memorable, and very engaging for viewers everywhere.
                    </p>
              </div>

                <div className="user-comment">
                    <div className="profile">
                        <img className="user-image" src="/man-two.png" />
                        <h4 className="user-name">Youssef</h4>
                    </div>
                    <p className="word-comment">
                        The image tells a strong story, combining simplicity and meaning in a way that 
                        feels modern and authentic to audiences.
                    </p>
              </div>

                <div className="user-comment">
                    <div className="profile">
                        <img className="user-image" src="/man-two.png" />
                        <h4 className="user-name">Amina</h4>
                    </div>
                    <p className="word-comment">
                       This design is creative and well balanced, showing skillful use of space that
                       guides the eye naturally with ease smoothly.
                    </p>
              </div>

                <div className="user-comment">
                    <div className="profile">
                        <img className="user-image" src="/man-two.png" />
                        <h4 className="user-name">Omar</h4>
                    </div>
                    <p className="word-comment">
                        I find the image visually appealing, as it communicates ideas clearly 
                        while maintaining a strong artistic identity throughout the composition.
                    </p>
              </div>

                <div className="user-comment">
                    <div className="profile">
                        <img className="user-image" src="/man-two.png" />
                        <h4 className="user-name">Sara</h4>
                    </div>
                    <p className="word-comment">
                       The overall presentation feels professional and thoughtful, leaving a positive impression
                       and encouraging viewers to look closer with great interest.
                    </p>
              </div>
              </>)}
              
              <div className="show-more"></div>
              <p onClick={openShowFn} className="show-more-words">{openShow ? 'show less' : 'show more' }</p>
            </div>
          </div>

        </div>

        <div className="descri">
          <h3>{imageItem.title}</h3>
          <p className="who-village-description who-js-village-description">
            {imageItem.description}
          </p>
          <div className="who-interacts">
            <span className="cursor-pointer engagement-action">
              <i className="fa-regular fa-comment"></i>&nbsp;&nbsp;comment
            </span>
            <span className="cursor-pointer engagement-action">
              <i className="fa-solid cursor-pointer fa-share"></i>
              &nbsp;&nbsp;share
            </span>
            <span className="cursor-pointer engagement-action">
              <i className="fa-regular cursor-pointer fa-thumbs-up"></i>
              &nbsp;&nbsp;I like it
            </span>
          </div>

          <p className="who-visit-button">Download</p>
          <p className="who-views">
            <span>views</span>
            <span>1345</span>
          </p>

          <div></div>
        </div>
        <div className="related-images">
          {theRestImageItems &&
            theRestImageItems.map((imageItem) => {
              return (
                <img className="left-image" src={`../../${imageItem.image}`} />
              );
            })}
        </div>
      </section>
      <Footer />
    </>
  );
}
