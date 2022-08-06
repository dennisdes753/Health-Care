import React, {useState, useEffect} from 'react';
import { BackgroundBanner, OurCareBack, OurCare1, OurCare2, OurCare3, Vegetable } from '../../index-img';
import {Container, Row, Col, Image} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/Footer';
import './pricing.scss';

function Pricing() {
	return (
		<>
			<Header />
			<div className="banner-inner" style={{ backgroundImage: `url(${BackgroundBanner})` }}>
				<div className="inner-content">
					<h4>Pricing</h4>
					<div className="navLink-text">
						<NavLink to="/" className="">Home</NavLink>
						<span>/</span>
						<NavLink to="" className="ms-2">Pricing</NavLink>
					</div>
				</div>
			</div>

            <Footer />	
		</>
	);
}

export default Pricing;