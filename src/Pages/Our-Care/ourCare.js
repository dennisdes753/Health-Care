import React, {useState, useEffect} from 'react';
import { BackgroundBanner, OurCareBack, OurCare1, OurCare2, OurCare3, Vegetable } from '../../index-img';
import {Container, Row, Col, Image} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/Footer';
import './ourcare.scss';

function OurCare() {
	const [user, setUser] = useState ([]);
	const fetchData= async () =>{
		const result  = await fetch ('https://jsonplaceholder.typicode.com/photos');
		setUser(await result.json());
	}
	useEffect (() =>{
		fetchData();
	}, [])
	return (
		<>
			<Header />
			<div className="banner-inner" style={{ backgroundImage: `url(${BackgroundBanner})` }}>
				<div className="inner-content">
					<h4>Our Care</h4>
					<div className="navLink-text">
						<NavLink to="/" className="">Home</NavLink>
						<span>/</span>
						<NavLink to="" className="ms-2">Our Care</NavLink>
					</div>
				</div>
			</div>

			<div className="ourCare_Back" style={{backgroundImage: `url(${OurCareBack})`}}>
				<Container>
					<Row>
						<Col lg={12} md={12} xs={12}>
							<div className="heading">
								<h4>Everyone Deserves Our Best Services</h4>
							</div>	
						</Col>
						{
							user.slice(0, 6).map((ourCareL) => { 
								return(
									<Col lg={4} md={6} xs={12}>
										<div className="assisted_living">
											<Image className="img-fluid service_image" src={ourCareL.thumbnailUrl}/> 
											<h6>{ourCareL.title}</h6>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
										</div>
									</Col>
								);
							})		
						}	
					</Row>
				</Container>
			</div>

            <div className="cardio">
                <Container>
                    <div className="mb-5">
                        <Row>
                            <Col lg={6} md={6} xs={12}>
                                <div className="cardio_text">
                                    <h4>Cardio Care</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                    <button className="btn btn-link button">Book an Appointment</button>
                                </div>
                            </Col>
                            <Col lg={6} md={6} xs={12}>
                                <div className="cardio_img">
                                    <Image className="img-fluid" src={OurCare1}></Image> 
                                </div>
                            </Col>
                        </Row>
                    </div>    

                    <div className="mb-5">
                        <Row>    
                            <Col lg={6} md={6} xs={12}>
                                <div className="cardio_img">
                                    <Image className="img-fluid" src={OurCare2}></Image> 
                                </div>
                            </Col>

                            <Col lg={6} md={6} xs={12}>
                                <div className="cardio_text">
                                    <h4>Pulmonary Care</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                    <button className="btn btn-link button">Book an Appointment</button>
                                </div>
                            </Col>
                        </Row>
                    </div>    

                    <div className="mb-5">
                        <Row>    
                            <Col lg={6} md={6} xs={12}>
                                <div className="cardio_text">
                                    <h4>Rehab Therapies</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                    <button className="btn btn-link button">Book an Appointment</button>
                                </div>
                            </Col>
                            <Col lg={6} md={6} xs={12}>
                                <div className="cardio_img">
                                    <Image className="img-fluid" src={OurCare3}></Image> 
                                </div>
                            </Col>
                        </Row>
                    </div>    
                </Container>            
            </div>

            <div className="book_appointment" style={{ backgroundImage: `url(${Vegetable})` }}>
            <Container>
               <Row>
                  <Col lg={12} md={12} xs={12}>
                     <div className="book_text">
                        <h4>Book an Appointment Today!</h4>
                        <p>Lorem ipsum dolor sit amet consec turadipicing elit sed eiusmod tempor.
                           incididunt labore.dolore. magna aliqua enim ad minim veniam.</p>
                        <button className="btn btn-link button">Get Appointment</button>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>

            <Footer />	
		</>
	);
}

export default OurCare;