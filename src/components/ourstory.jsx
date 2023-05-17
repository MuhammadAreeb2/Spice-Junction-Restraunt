import React from "react";
import { motion } from "framer-motion";
import News1 from "../assests/News1.png"
import News3 from "../assests/News3.png"
import News2 from "../assests/news2.png"
import img1 from "../assests/Pic 1.png"
import img2 from "../assests/pic 2.png"
import img3 from "../assests/pic 3.png"
function Story() {

    const News = [
        {
            id: 1,
            img: News1,
        },
        {
            id: 2,
            img: News2,
        },
        {
            id: 3,
            img: News3,
        }
    ]
    return (
        <>
            <div className="heading_story ">
                <h3 style={{ fontSize: "1.5rem" }} className="h3">
                    DISCOVER
                </h3>
            </div>
            <div className="heading_story ">
                <h1 style={{ fontSize: "3rem" }} className="h1">
                    UPCOMING EVENTS
                </h1>
            </div>
            <div className="para_story">
                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero cupiditate similique expedita tenetur omnis earum quos accusantium assumenda nobis unde!</p>
            </div>

            <div className="imges  " >
                {
                    News.map((item, index) => (

                        <div key={index}>

                            <motion.div
                                className="gap_news"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.5 }}
                                transition={{ type: "keyframes", stiffness: 400, damping: 17 }}
                            >
                                <img src={item.img} alt="" width={"280px"} className="imgg" />
                            </motion.div>

                        </div>



                    ))
                }
            </div>

            <div style={{ padding: "30px" }}>

            </div>

            <div className="story_event_main_div container" style={{ display: "flex", justifyContent: "center" }} >
                <div className="story_event_left_div">
                    <img src={img1} alt="" className="img1" />
                </div>
                <div className="story_event_right_div" >
                    <div width="25%">
                        <img src={img2} alt="" className="img2" />
                    </div>
                    <div width="25%">
                        <img src={img3} alt="" className="img3" />
                    </div>
                </div>

            </div>

        </>
    )
}
export default Story