import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Row, Col } from "react-bootstrap"
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import { useNavigate } from 'react-router-dom';
import logo from "../assests/CuisineLogo.png"
import { Link } from "react-router-dom";


function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const pages = ['Home', 'Menu', 'Our Story', 'Contact Us'];

    let nav = useNavigate()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    console.log(nav)

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const pagenavigate = (data) => {
        console.log(data)
        nav(`/${data}`)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    let iconstyle = {
        fontSize: "40px"
    }

    return (
        <Box>
            <AppBar position="static" className='navbar'>
                <Container maxWidth="xl">
                    <Row style={{ display: "flex", justifyContent: "flex-end" }}>

                        <Toolbar disableGutters>

                            <Col>
                                <img src={logo} width={"100px"} />

                            </Col>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                        // color:'white',

                                        // backgroundColor:'white'

                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                        // color:'white',
                                        // backgroundColor:'white'

                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={() => pagenavigate(page)}

                                        >

                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Col style={{ alignContent: "end" }}>
                                <Row
                                    style={{ flex: 1 }}>

                                    <div className='delivery_heading'>  <h6>   Express Delivery   </h6> <SendToMobileIcon style={iconstyle} />  </div>
                                    <div className='delivery_para'>   <p  >03313521879</p> </div>



                                </Row>

                                <Row
                                    style={{ flex: 1 }}>           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                        {pages.map((page) => (
                                            
                                             <Button className='navbtn'
                                        //    <Link to="`/ ${page} `">  <Button className='navbtn'
                                                key={page}
                                                onClick={() => pagenavigate(page)}

                                                sx={{ color: 'black', display: 'flex', justifyContent: "space-between" }}
                                            >
                                                {page}
                                            </Button>
                                            // </Link>


                                        ))}
                                    </Box>
                                </Row>

                            </Col>
                        </Toolbar>

                    </Row>
                </Container>
            </AppBar>

        </Box >
    );
}

export default Navbar;