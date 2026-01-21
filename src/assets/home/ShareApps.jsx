

export function ShareApps({ShareImage}) {
   
    return (

      <>
            <div className="share-apps" >
                    <div onClick={ShareImage} className="share-apps-close" ></div>
                    <span><i className="fa-brands fa-facebook"></i></span>
                    <span><i className="fa-brands fa-whatsapp"></i></span>
                    <span><i className="fa-solid fa-envelope"></i></span>
                    <span><i className="fa-brands fa-twitter"></i></span>
                    <span><i className="fa-brands fa-telegram"></i></span>
                    <span><i className="fa-solid fa-link"></i></span>
             </div>
      </>
      
    )
}