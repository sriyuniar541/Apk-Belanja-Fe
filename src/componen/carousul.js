import React from "react";
import Celana from '../image/celanac.png'
import Spc from './../image/spc.png'
import Cpc from './../image/cpc.png'
import Baju from './../image/bajuc.png'
import Jaket from '../image/jaketc.png'

export default function CarouselCategory() {
    return (
        <div>
            <section className="carousel-category">
                <div className="container-fluid">
                    <div id="carousel-example" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner row w-100 mx-auto" role="listbox">
                            <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active p-4 " style={{ backgroundColor: " blue", borderRadius: "8px" }}>
                                <img src={Celana} className="img-fluid mx-auto d-block" alt="img1" />{' '}
                            </div>
                            <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 p-4" style="background-color:#57CD9E;border-radius: 8px;">
                                <img src={Spc} className="img-fluid mx-auto d-block" alt="img2" />
                            </div>
                            <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 p-4" style="background-color:#E31F51;border-radius: 8px;">
                                <img src={Cpc} className="img-fluid mx-auto d-block" alt="img2" />
                            </div>
                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 p-4" style="background-color: #CC0B04 ;border-radius: 8px;">
                                <img src={Baju} className="img-fluid mx-auto d-block" alt="img4" />
                            </div>
                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 p-4" style="background-color:#F67B02 ;border-radius: 8px;">
                                <img src={Jaket} className="img-fluid mx-auto d-block" alt="img5" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}










