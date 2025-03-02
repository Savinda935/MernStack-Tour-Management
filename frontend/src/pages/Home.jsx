import React from "react";
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle';

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";

const Home = () => {
  return <>

  {/*===========hero section start here================*/}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className="hero_content">
            <div className="hero_subtitle d-flex align-items-center">
              <Subtitle Subtitle={ 'Know Before You Go' }/>
              <img src={worldImg} alt="" />
            </div>
            <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
            <p>Discover the World: Your Adventure Awaits
Unique Tours Explore hidden gems with expert guides. Dive into culture, history, and natural beauty.
Adventure Packages Thrill-seekers, gear up! Experience mountain climbing, scuba diving, and more.
Experiential Experiences Engage in local traditions. Participate in workshops, culinary classes, and craft sessions.</p>
            </div>
          </Col>
          <Col lg='2'>
           <div className="hero_img-box">
            <img src={heroImg} alt="" />
           </div>
          </Col>
          <Col lg='2'>
           <div className="hero_img-box mt-4">
            <video src={heroVideo} alt="" controls/>
           </div>
          </Col>
          <Col lg='2'>
           <div className="hero_img-box mt-5">
            <img src={heroImg02} alt="" />
           </div>
          </Col>
          <SearchBar/>
        </Row>
      </Container>
    </section>
    {/*===========hero section ends here================*/}
    <section>
        <Container>
            <Row>
                <Col lg='3'>
                <h5 className="services_subtitle">What we serve</h5>
                <h2 className="services_title">We offer our best services</h2>
                </Col>
                <ServiceList/>
            </Row>
        </Container>
    </section>
  </>
};

export default Home;
