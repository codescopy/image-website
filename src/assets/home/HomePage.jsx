import { imageList } from "../../../data/image-list"
import { Header } from "../header/Head"
import { Footer } from "../footer/Footer"

import { OneImage } from "./OneImage"
import './HomePage.css'


export function HomePage() {
    
    return (
        <>
        
        <Header />
        <section class="all-content">
        {imageList &&
            imageList.map((imageItem) => {
             
    
            return (
            <OneImage imageItem={imageItem} />
            )})
        }

        </section>
        <Footer />
        </>
    )
}