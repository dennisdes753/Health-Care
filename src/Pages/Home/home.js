import React, { useEffect, useState } from 'react';
import Header from '../Header/header';
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import { BannerImg, Assisted, HomeHappiest, BackgroundBanner, Experience, Experience1, Experience2, Experience3, Experience4, Map, Appointment } from '../../index-img';
import Footer from '../Footer/Footer';

import { Servicess, DetailService } from "../DataHeader/dataHeader"

import './home.scss';

function Home() {

   const [data, setData] = useState([])

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(ree => setData(ree))
   }, [])

   console.log(data)
   return (
      <>
         <Header />
         <div className="banner-sec">
            <Image className="img-fluid" src={BannerImg} />
            <div className="banner-text">
               <div className="banner-text-inner">
                  <h2>Happiness is a Cigar <br />Called Senior Care</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                  <button className="btn btn-link button">Contact Us</button>
               </div>
            </div>
         </div>
         <div className="second-sec">
            <Container>
               <Row>
                  <Col lg={12} xs={12}>
                     <div className="heading">
                        <h4>Everyone Deserves Our <br />Best Services</h4>
                     </div>
                  </Col>
                  {/* {
            data.map((dtatatta) => <div className='jkhk'>
            <p>{dtatatta.id}</p>
            <h1>{dtatatta.title}</h1>
              <p>{dtatatta.body}</p>
            </div>)
          } */}
                  {
                     Servicess.map((hjkhj) =>
                        <Col lg={4} xs={12}>
                           <div className="assisted">
                              <Image className="img-fluid" src={Assisted} />
                              <h6>{hjkhj.heading}</h6>
                              <p>{hjkhj.text}</p>
                           </div>
                        </Col>
                     )
                  }
               </Row>
            </Container>
         </div>

         <div className="third-sec">
            <Container>
               <Row>
                  <Col lg={6} xs={12}>
                     <div className="home-happiest">
                        <h4>Home Care Where You’re Happiest</h4>
                        <Row>
                           {
                              DetailService.map((detailS) =>
                                 <Col lg={6} xs={12}>
                                    <div className="donation">
                                       <h6>{detailS.title}</h6>
                                       <div className="hr-line"></div>
                                       <h5>{detailS.heading}</h5>
                                       <p>{detailS.text}</p>
                                    </div>
                                 </Col>
                              )
                           }
                        </Row>
                     </div>
                  </Col>
                  <Col lg={6} xs={12}>
                     <div className="homep-patt">
                        <Image className="img-fluid" src={HomeHappiest} />
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>

         <div className="book_appointment" style={{ backgroundImage: `url(${BackgroundBanner})` }}>
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

         <div className="experience" style={{ backgroundImage: `url(${Experience})` }}>
            <Container>
               <Row>
                  <Col lg={3} md={3} xs={12}>
                     <div className="experience_1">
                        <Image className="img-fluid" src={Experience1} />
                        <h4>Years Experience</h4>
                     </div>
                  </Col>
                  <Col lg={3} md={3} xs={12}>
                     <div className="experience_1">
                        <Image className="img-fluid" src={Experience2} />
                        <h4>Great Volunteers</h4>
                     </div>
                  </Col>
                  <Col lg={3} md={3} xs={12}>
                     <div className="experience_1">
                        <Image className="img-fluid" src={Experience3} />
                        <h4>Satiesfied Clients</h4>
                     </div>
                  </Col>
                  <Col lg={3} md={3} xs={12}>
                     <div className="experience_1">
                        <Image className="img-fluid" src={Experience4} />
                        <h4>Awards Achieve</h4>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>

         <div className="appointment" style={{ backgroundImage: `url(${Map})` }}>
            <div className="appointment_img">
               <Col lg={6} md={6} xs={12}>
                  <Image className="img-fluid" src={Appointment} />
               </Col>
               <Col lg={6} md={6} xs={12}>
                  <div className="form_appointment">
                     <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Email address</Form.Label>
                           <Form.Control type="email" placeholder="Enter email" />
                           <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                           </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                           <Form.Label>Password</Form.Label>
                           <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                           <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <button variant="primary" type="submit" className="btn btn-link button">
                           Submit
                        </button>
                     </Form>
                  </div>
               </Col>
            </div>
         </div>

         <div className="fooer_home">
            <Footer />
         </div>   
      </>
   );
}

export default Home;