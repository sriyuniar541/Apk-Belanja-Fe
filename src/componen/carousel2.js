import React, { Component } from "react";
import Slider from "react-slick";
import k10 from '../image/c1 (1).png'
import k11 from '../image/c1 (2).png'


export default class Carousel2 extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 3
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className=" d-flex justify-content-between   me-3" >
                        <img src={k11} alt='' className='img-fluid col-12'  style={{borderRadius:'5px'}}/>
                    </div>
                    <div className=" d-flex justify-content-between ">
                        <img src={k10} alt='' className='img-fluid col-12 ms-3'style={{borderRadius:'6px'}}/>
                    </div>
                    <div className=" d-flex justify-content-between   me-3"  >
                        <img src={k11} alt='' className='img-fluid col-12'  style={{borderRadius:'5px'}}/>
                    </div>
                    <div className=" d-flex justify-content-between ">
                        <img src={k10} alt='' className='img-fluid col-12 ms-3'style={{borderRadius:'6px'}}/>
                    </div>
                </Slider>
            </div>
        );
    }
}