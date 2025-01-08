import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import wetherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData= [
    {
        imgurl: wetherImg,
        title: "calculate wether",
        desc: "Get the weather information of your destination"
    },
    {
        imgurl: guideImg,
        title: "Best tour Guide",
        desc: "Find the best local guide for your trip"
    },
    {
        imgurl: customizationImg,
        title: "Customization",
        desc: "Customize your trip as you want"
    }

]  

const ServiceList = () => {
    return (
      <>
        {
          servicesData.map((item, index) =>(
             <Col lg="3" key={index}>
                <ServiceCard item={item}/>
                </Col>)
        )}
      </>
    );
  };
  
  export default ServiceList;
  