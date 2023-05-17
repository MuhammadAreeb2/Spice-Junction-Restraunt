import React from 'react';
import { useFormik } from 'formik';
import { Button } from "@mui/material"
import { Container } from 'react-bootstrap';

const Form = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <Container>
                <div className='name_div'>

                    <div style={{padding:"10px 10px"}}>
                        <div >
                        <label htmlFor="firstName">First Name</label> </div>
                        <div><input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        /></div>
                    </div>
                    <div style={{padding:"10px 10px"}}>
                        <div>
                            <label htmlFor="lastName">Last Name</label></div>
                        <div> <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                        </div>
                    </div>
                </div>
                <div className='email_div'>
                    <div style={{padding:"0px 0px"}}>
                        <div>
                            <label htmlFor="email">Email Address</label></div>
                        <div>  <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        </div>
                    </div>
                    <div style={{padding:"10px 0px"}}>
                        <div>

                            <label htmlFor="address">Address</label></div>
                        <div>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.address}
                            />
                        </div>
                    </div>
                    <div style={{padding:"10px 0px"}}>
                        <div >
                            <label htmlFor="people">People</label></div>
                        <div><input
                            id="people"
                            name="people"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.people}
                        />
                        </div>
                    </div>
                </div>

                <Button type="submit" variant='outlined' className='submit_btn'>Submit</Button>
            </Container>
        </form>
    );
};
export default Form