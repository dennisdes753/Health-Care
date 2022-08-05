import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import {FooterLink, careService, Resource} from '../DataHeader/dataHeader';
import './footer.scss';

function Footer() {
    return (
        <>
            <div className="footer">
                <Container>
                    <Row>
                        <Col lg={3} xs={12}>
                            <h6>About Us</h6>
                            <ul className="footer_ul">
                                {FooterLink.length>0 && FooterLink.map((footerL)=>{
                                    return(
                                        <Nav.Link href={footerL.path}>{footerL.element}</Nav.Link>
                                    )
                                })}
                            </ul>
                        </Col>
                        <Col lg={3} xs={12}>
                            <h6>Care & Services</h6>
                            <ul className="footer_ul">
                                {careService.length>0 && careService.map((careServicee)=>{
                                    return(
                                        <Nav.Link href={careServicee.path}>{careServicee.element}</Nav.Link>
                                    )
                                })}
                            </ul>
                        </Col>
                        <Col lg={3} xs={12}>
                        <h6>Resource Library</h6>
                            <ul className="footer_ul">
                                {Resource.length>0 && Resource.map((resourcee)=>{
                                    return(
                                        <Nav.Link href={resourcee.path}>{resourcee.element} </Nav.Link>
                                    )
                                })}
                            </ul>
                        </Col>
                        <Col lg={3} xs={12}>
                            <h6>Trinity Careers</h6>
                            <p>We're as dedicated to our team members as we are to our residents.
                            Learn more about working at Trinity Care Health.</p>
                            <button className="btn btn-link button">Join Us</button>
                            <h4 className="mt-3">Professionals</h4>
                            <button className="btn btn-link button">Become A Partner</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer;