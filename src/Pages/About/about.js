import React, {useState, useEffect} from 'react';
import { BackgroundBanner, AboutBanner, ServiceBackground, ChooseImg } from '../../index-img';
import {Container, Row, Col, Image} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import { NavLink } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/Footer';
import './about.scss';

function About() {
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
					<h4>About Us</h4>
					<div className="navLink-text">
						<NavLink to="/" className="">Home</NavLink>
						<span>/</span>
						<NavLink to="" className="ms-2">About Us</NavLink>
					</div>
				</div>
			</div>

			<div className="approach">
				<Container>
					<Row>
						<Col lg={6} md={6} xs={12}>
							<div className="approach_img">
								<Image className="img-fluid" src={AboutBanner}/>
							</div>
						</Col>
						<Col lg={6} md={6} xs={12}>
							<div className="approach_text">
								<h4>We're Take Care of Your Problems Carefully</h4>
								<Tabs
									defaultActiveKey="home"
									id="uncontrolled-tab-example"
									className="mb-3"
								>
									<Tab eventKey="home" title="Approach">
										<p>Our goal each day is to ensure that our residents’ needs are not only met but exceeded. To make that happen, we are committed to providing an environment in which residents can enjoy a wide range of amenities that allow them to feel independent.</p>
									</Tab>
									<Tab eventKey="profile" title="Mission">
										<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
									</Tab>
									<Tab eventKey="contact" title="Target">
										<p>Amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
									</Tab>
								</Tabs>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<div className="services" style={{backgroundImage: `url(${ServiceBackground})`}}>
				<Container>
					<Row>
						<Col lg={12} md={12} xs={12}>
							<div className="heading">
								<h4>Everyone Deserves Our Best Services</h4>
							</div>	
						</Col>
						{
							user.slice(0, 3).map((about) => { 
								return(
									<Col lg={4} md={6} xs={12}>
										<div className="assisted_living">
											<Image className="img-fluid service_image" src={about.thumbnailUrl}/> 
											<h6>{about.title}</h6>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
										</div>
									</Col>
								);
							})		
						}	
					</Row>
				</Container>
			</div>

			<div className="why_choose">
				<Container>
					<Row>
						<Col lg={6} md={6} xs={12}>
							<h4>Why Most of The People Choose Trinity Care Health</h4>
							<p>Trnity gives illimitable amenities to respect seniors so that they can feel free and independent. That's why people choose trinity care health.</p>
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
								<Accordion.Header>Resort Style Living</Accordion.Header>
									<Accordion.Body>
									We provide these services for your amenities where you can feel that you are living in a resort.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>Safety & Security Guaranty</Accordion.Header>
									<Accordion.Body>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
										eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
										minim veniam, quis nostrud exercitation ullamco laboris nisi ut
										aliquip ex ea commodo consequat. Duis aute irure dolor in
										reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
										pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
										culpa qui officia deserunt mollit anim id est laborum.
									</Accordion.Body>
								</Accordion.Item>
    						</Accordion>
						</Col>
						<Col lg={6} md={6} xs={12}>
							<Image className="img-fluid" src={ChooseImg}/>
						</Col>
					</Row>
				</Container>
			</div>

			
			<div className="fooer_home">
				<Footer />
			</div>	
		</>
	);
}

export default About;