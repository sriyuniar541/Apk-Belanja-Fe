import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import k1 from '../image/k (1).png'
import k2 from '../image/k (2).png'
import k3 from '../image/k (3).png'
import k10 from '../image/k (4).png'
import k11 from '../image/k (5).png'



export default class Carousel extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className=" container">
                <Slider {...settings}>
                    <Link to='/category/short'>
                        <div className="d-flex justify-content-center "  >
                            <img src={k11} alt='' className='img-fluid '/>
                        </div>
                    </Link>
                   <Link to='/category/jacket'>
                        <div className="d-flex justify-content-center ">
                            <img src={k10} alt='' className='img-fluid ' />
                        </div>
                    </Link>
                    <Link to='/category/t_shirt'>
                    <div className=" d-flex justify-content-center ">
                        <img src={k1} alt='' className='img-fluid '/>
                    </div>
                    </Link>
                    <Link to='/category/soes'>
                        <div className="d-flex justify-content-center">
                            <img src={k2} alt='' className='img-fluid '/>
                        </div>
                    </Link>
                    <Link to='/category/pants'>
                        <div className="d-flex justify-content-center ">
                            <img src={k3} alt='' className='img-fluid '/>
                        </div>
                    </Link>
                    <Link to='/category/short'>
                        <div className="d-flex justify-content-center "  >
                            <img src={k11} alt='' className='img-fluid '/>
                        </div>
                    </Link>
                   <Link to='/category/jacket'>
                        <div className="d-flex justify-content-center ">
                            <img src={k10} alt='' className='img-fluid ' />
                        </div>
                    </Link>
                    <Link to='/category/t_shirt'>
                    <div className=" d-flex justify-content-center ">
                        <img src={k1} alt='' className='img-fluid '/>
                    </div>
                    </Link>
                    <Link to='/category/soes'>
                        <div className="d-flex justify-content-center">
                            <img src={k2} alt='' className='img-fluid '/>
                        </div>
                    </Link>
                    <Link to='/category/pants'>
                        <div className="d-flex justify-content-center ">
                            <img src={k3} alt='' className='img-fluid '/>
                        </div>
                    </Link>
                    <Link to='/category/short'>
                        <div className="d-flex justify-content-center "  >
                            <img src={k11} alt='' className='img-fluid '/>
                        </div>
                    </Link>
                   <Link to='/category/jacket'>
                        <div className="d-flex justify-content-center ">
                            <img src={k10} alt='' className='img-fluid ' />
                        </div>
                    </Link>
                    <Link to='/category/t_shirt'>
                    <div className=" d-flex justify-content-center ">
                        <img src={k1} alt='' className='img-fluid '/>
                    </div>
                    </Link>
                    <Link to='/category/soes'>
                        <div className="d-flex justify-content-center">
                            <img src={k2} alt='' className='img-fluid '/>
                        </div>
                    </Link>
                    <Link to='/category/pants'>
                        <div className="d-flex justify-content-center ">
                            <img src={k3} alt='' className='img-fluid '/>
                        </div>
                    </Link>
                </Slider>
            </div>
        );
    }
}