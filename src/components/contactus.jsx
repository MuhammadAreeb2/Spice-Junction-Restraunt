import React from "react";
import Form from "./formik"
function Contact() {
    return (
        <>
            <div className="container" style={{ padding: "20px 0px", marginTop: "40px" }}>

                <div className="heading_contact ">
                    <h3 style={{ fontSize: "1.5rem" }} className="h3">
                        RESERVATION
                    </h3>
                </div>
                <div className="heading_contact ">
                    <h1 style={{ fontSize: "3rem" }} className="h1">
                        BOOK YOUR TABLE
                    </h1>
                </div>

                <div>
                    <Form />
                </div>


            </div>
        </>
    )
}

export default Contact