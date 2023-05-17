import React from "react";
import "../App.css"
import picture from "../assests/Banner Image.png"
import { Row, Col, Container } from "react-bootstrap"
import Navbar from "./navbar"
import { motion } from "framer-motion";
import { WhatsApp } from "@mui/icons-material";
import { Button } from "@mui/material";

function Home() {
    return (
        <>
            <section id="home">
                <div className="homediv">
                    <Row>
                        <Navbar />
                    </Row>

                    <Row className="headrow">
                        <Col className="leftcol" >

                            <motion.div>
                                <motion.h3 className="heading"
                                    animate={{ x: 20 }}
                                    transition={{ type: "spring", stiffness: 100 }}>
                                    Are you hungry
                                </motion.h3>
                            </motion.div>
                            < motion.div >
                                <motion.h1 className="subheading"
                                    animate={{ x: 20 }}
                                    transition={{ type: "spring", stiffness: 100 }}> <strong>
                                        Don't Wait
                                    </strong>
                                </motion.h1>
                            </motion.div>
                            <motion.div>
                                <motion.h5 className="subsubheading"
                                    animate={{ x: 20 }}
                                    transition={{ type: "spring", stiffness: 100 }}>
                                    LET START TO ORDER FOOD NOW
                                </motion.h5>
                            </motion.div>
                            <motion.h6 className="callsubhead">
                                Call Us Now
                            </motion.h6>
                            <div>
                              
                                <Button variant="outlined"><WhatsApp/>  +92 3539 928374  </Button></div>

                        </Col>
                        <Col className="rightcol">
                            <motion.img
                                initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 60,
                                    damping: 20,
                                }}
                                className="picture"
                                whileHover={{ scale: 1.0 }}

                                src={picture}
                                alt="img2"
                                width={550}
                            />

                        </Col>
                    </Row>


                </div>
            </section>

        </>
    )
}

export default Home