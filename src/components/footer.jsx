import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material"
// import {TbTruckDelivery} from "@mui/icons-material"
import { FireTruckOutlined } from "@mui/icons-material";
import "./footer.css"
import { motion } from "framer-motion";
import Logo from "../assests/CuisineLogo.png"
const Footer = () => {
    return (
        <div className="footer" id="contactus">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-12 left-side " style={{ width: '15%' }}>
                        <img src={Logo} alt="" width={"100px"} />
                    </div>
                    <div className="col-lg-5 col-sm-12 center-side" style={{ width: '50%' }} >

                        <p className="footer-hover">
                            <h5>Our Story</h5>
                            Watch Gallery is a direct-to-consumer brand thus we price our Timepieces at fraction of the similar quality and similar fashion brands.
                            we believe in high volumes and less margins.
                            We never compromise on quality, in-fact,
                            Our premium-quality watches are waiting to be discovered.
                        </p>


                    </div>

                    <div className="col-lg-5 col-sm-12 right-side left-side" style={{ width: '15%' }} >
                        <table style={{ textAlign: "center" }}>
                            <tr>
                                <th>
                                    Quick Links

                                </th>
                            </tr>

                            <tr><td>Home</td></tr>
                            <tr><td>Menu
                            </td></tr>
                            <tr><td>Our Story
                            </td></tr>
                            <tr><td>Contact Us</td></tr>


                        </table>
                    </div>
                    <div className="col-lg-3 col-sm-12  Express-Links " style={{ width: "17%" }}>
                        <div
                            style={{
                                display: "flex",

                                textAlign: "justify",
                            }}
                        >
                            <div>
                                <p style={{ fontSize: "800",padding:"0px 5px" }} >Express Delivery</p>
                                <p style={{padding:"0px 5px" , marginTop:"-10px" ,marginLeft:"5px"}}>0321-8259487</p>

                            </div>
                            <div className="truck">
                                <FireTruckOutlined
                                    style={{
                                        color: "yellow",
                                        fontSize: "30px",
                                        marginLeft: "2px"
                                    }}
                                />
                            </div>


                        </div>
                    </div>

                </div>
            </div>

            <div className="footer-icons">
                <motion.div whileHover={{ scale: 1.2 }} className="footer-bg">
                    <Instagram className="footer-icon" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="footer-bg">
                    <Facebook className="footer-icon" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} className="footer-bg">
                    <Twitter className="footer-icon" />
                </motion.div>
                <a href="https://wa.me/+923218259487" style={{ color: "black" }}>
                    <motion.div whileHover={{ scale: 1.2 }} className="footer-bg">
                        <WhatsApp className="footer-icon" />
                    </motion.div>
                </a>
            </div>
            <div className="row">
                <p
                    className=" mt-3 pb-3 text-center "
                    style={{
                        color: "white",
                    }}
                >
                    © Restraunt 2023 - All Right Reserved.<br></br>
                    <span
                        className="mx-2"
                        style={{
                            color: "orange",
                            fontWeight: "600",
                            textTransform: "uppercase ",
                        }}
                    >
                        Muhammad Areeb
                    </span>

                </p>
            </div>


        </div>
    )
}

export default Footer