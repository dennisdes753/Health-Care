import React from 'react';
import { Container, Row, Col, Navbar, Nav, Image } from 'react-bootstrap';
import { IoIosPin } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Logo } from '../../index-img';
import { NavLink } from 'react-router-dom';
import {navLink} from '../DataHeader/dataHeader';
import './header.scss';

function header() {
    const navLinkstyles = ({isActive}) => {
        return{
          fontWeight: isActive ? 'bold' : 'normal',
        }
      }
    return (
        <>
            <div className="top-stipe">
                <Container>
                    <Row>
                        <Col lg={12} xs={12}>
                            <div className="address">
                                <div className="wrap-address">
                                    <p><IoIosPin className="color-yellow" /> <span>Discover St. New York , NY 10012, USA</span></p>
                                    <div className="hr-line"></div>
                                    <p><BsFillTelephoneFill className="color-yellow" /> <span>+251-235-3256</span></p>
                                </div>
                                <div className="social-icons">
                                    <NavLink to=""><FaFacebookF /></NavLink>
                                    <NavLink to=""><FaTwitter /></NavLink>
                                    <NavLink to=""><FaInstagram /></NavLink>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Navbar collapseOnSelect expand="lg" className="nav-project">
                <Container>
                    <Navbar.Brand href="/">
                        <Image className="img-fluid" src={Logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                            <Nav className="header_link">
                                {navLink.length>0 && navLink.map((menu)=>{
                                    return(
                                        <ul>
                                            <li>
                                                <NavLink style={navLinkstyles} to={menu.path}>{menu.element }</NavLink>
                                            </li>
                                        </ul>    
                                    );
                                })}
                                
                                <Nav.Link href="/careers">
                                    <NavLink to="" className="btn bt-link button">Contact Us</NavLink>
                                </Nav.Link>
                            </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default header;