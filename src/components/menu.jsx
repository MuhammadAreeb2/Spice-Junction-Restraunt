import React from "react";
import product1 from "../assests/Product1.png"

import product2 from "../assests/Product2.png"

import product3 from "../assests/Product3.png"

import product4 from "../assests/Product4.png"

import product5 from "../assests/Product5.png"
import { Button } from "@mui/material";
import { Row, Col, Container } from "react-bootstrap"

import 'aos/dist/aos.css';
import AOS from 'aos';

function Menu() {
    const products = [
        {
            id: 1,
            img: product1,
            heading: "chicken Chowmin",

        },
        {
            id: 2,
            img: product2,
            heading: "chicken Chowmin",

        },
        {
            id: 3,
            img: product3,
            heading: "chicken Chowmin",

        },

        {
            id: 4,
            img: product4,
            heading: "Tikka",
        },
        {
            id: 5,
            img: product5,
            heading: "Zinger Burger",
        },
    ]

    return (

        <>
            <Container>   <Row className="m_Row1">
                <Col>
                    <h1 className="m_heading">CHOOSE AND ENJOY </h1>
                </Col>

            </Row>
                <Row className="m_Row2">
                    <Col className="m_para_col" >
                        <p className="m_para">We are passionate about serving you the best! make your life moments more special with our delectable meals whenever you want.
                            Just order from our amazing food menu right away and experience the real test.</p>
                    </Col>

                </Row>

            </Container>


            <div className="bg"></div>
            <div className="container">
                <div className="m_items" >

                    {/* {
                        products.map((item, index) => (
                            <div>
                                <div className="product_div" key={index}>

                                    <div  >
                                        <img src={item.img} alt="" className="img_div" />
                                    </div>
                                    <div className="product_heading">
                                        <h2 style={{ fontSize: "1.4rem" }}>{item.heading}</h2>
                                    </div>
                                    <div><Button variant="outlined">Order Now </Button></div>
                                    <motion.div className="progress" style={{ scaleX }} />

                                </div>
                            </div>

                        ))
                    } */}
                    {AOS.init({
                        duration: 1200,
                    })
                    }

                    <div className="product_div">
                        <div className="item item1" data-aos="zoom-out" >
                            <div className="img">
                                <img src={product1} alt="" />
                            </div>
                            <div className="product_heading"  >
                                <h2 style={{ fontSize: "1.5rem" }}  >Chicken Chowmin</h2>
                            </div>
                            <div><Button variant="outlined" className="btns">Order Now </Button></div>



                        </div>

                        <div className="item" data-aos="zoom-in">
                            <div className="img">
                                <img src={product2} alt="" />
                            </div>
                            <div className="product_heading"  >
                                <h2 style={{ fontSize: "1.5rem" }}  >Grilled Fish</h2>
                            </div>
                            <div><Button variant="outlined" className="btns">Order Now </Button></div>

                        </div>

                        <div className="item" data-aos="fade-right">
                            <div className="img">
                                <img src={product3} alt="" />
                            </div>
                            <div className="product_heading"  >
                                <h2 style={{ fontSize: "1.5rem" }}  >Karahi</h2>
                            </div>
                            <div><Button variant="outlined" className="btns">Order Now </Button></div>

                        </div>

                        <div className="item" data-aos="fade-left">
                            <div className="img">
                                <img src={product4} alt="" />
                            </div>
                            <div className="product_heading"  >
                                <h2 style={{ fontSize: "1.5rem" }}  >Tikka</h2>
                            </div>
                            <div><Button variant="outlined" className="btns">Order Now </Button></div>

                        </div>

                        <div className="item" data-aos="fade-up-right">
                            <div className="img">
                                <img src={product5} alt="" />
                            </div>
                            <div className="product_heading"  >
                                <h2 style={{ fontSize: "1.5rem" }}  >Zinger Burger</h2>
                            </div>
                            <div><Button variant="outlined" className="btns">Order Now </Button></div>

                        </div>

                    </div>





                </div>
                <div className="bottom_border"></div>
            </div>

        </>
    )
}

export default Menu 