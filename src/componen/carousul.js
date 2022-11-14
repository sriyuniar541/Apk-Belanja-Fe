import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import  Celana from '../image/celanac.png' //untuk import gambar
import Spc from './../image/spc.png' //untuk import gambar
import Cpc from './../image/cpc.png' //untuk import gambar
import Baju from './../image/bajuc.png' //untuk import gambar
import Jaket from '../image/jaketc.png' //untuk import gambar

export default function CarouselCategory() {
    return (
        <div>
            <section className="carousel-category">
            <div className="container-fluid">
                <div id="carousel-example" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner row w-100 mx-auto" role="listbox">
                        <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active p-4 " style={{backgroundColor:" blue",borderRadius: "8px"}}>
                            <img src={Celana} className="img-fluid mx-auto d-block" alt="img1"/>{' '}
                        </div>
                        <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 p-4" style="background-color:#57CD9E;border-radius: 8px;">
                            <img src={Spc} className="img-fluid mx-auto d-block" alt="img2"/>
                        </div>
                        <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 p-4" style="background-color:#E31F51;border-radius: 8px;">
                        <img src={Cpc} className="img-fluid mx-auto d-block" alt="img2"/>
                        </div>
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 p-4" style="background-color: #CC0B04 ;border-radius: 8px;">
                            <img src={Baju} className="img-fluid mx-auto d-block" alt="img4"/>
                        </div> 
                        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 p-4" style="background-color:#F67B02 ;border-radius: 8px;">
                            <img src={Jaket} className="img-fluid mx-auto d-block" alt="img5"/>
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










// css carousel

// @media (min-width: 768px) and (max-width: 991px) {
//     /* Show 4th slide on md if col-md-4*/
//     .carousel-inner .active.col-md-4.carousel-item + .carousel-item + .carousel-item + .carousel-item {
//         position: absolute;
//         top: 0;
//         right: -33.3333%;  /*change this with javascript in the future*/
//         z-index: -1;
//         display: block;
//         visibility: visible;
//     }
// }
// @media (min-width: 576px) and (max-width: 768px) {
//     /* Show 3rd slide on sm if col-sm-6*/
//     .carousel-inner .active.col-sm-6.carousel-item + .carousel-item + .carousel-item {
//         position: absolute;
//         top: 0;
//         right: -50%;  /*change this with javascript in the future*/
//         z-index: -1;
//         display: block;
//         visibility: visible;
//     }
// }
// @media (min-width: 576px) {
//     .carousel-item {
//         margin-right: 0;
//     }
//     /* show 2 items */
//     .carousel-inner .active + .carousel-item {
//         display: block;
//     }
//     .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),
//     .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item {
//         transition: none;
//     }
//     .carousel-inner .carousel-item-next {
//         position: relative;
//         transform: translate3d(0, 0, 0);
//     }
//     /* left or forward direction */
//     .active.carousel-item-left + .carousel-item-next.carousel-item-left,
//     .carousel-item-next.carousel-item-left + .carousel-item,
//     .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item {
//         position: relative;
//         transform: translate3d(-100%, 0, 0);
//         visibility: visible;
//     }
//     /* farthest right hidden item must be also positioned for animations */
//     .carousel-inner .carousel-item-prev.carousel-item-right {
//         position: absolute;
//         top: 0;
//         left: 0;
//         z-index: -1;
//         display: block;
//         visibility: visible;
//     }
//     /* right or prev direction */
//     .active.carousel-item-right + .carousel-item-prev.carousel-item-right,
//     .carousel-item-prev.carousel-item-right + .carousel-item,
//     .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item {
//         position: relative;
//         transform: translate3d(100%, 0, 0);
//         visibility: visible;
//         display: block;
//         visibility: visible;
//     }
// }
// /* MD */
// @media (min-width: 768px) {
//     /* show 3rd of 3 item slide */
//     .carousel-inner .active + .carousel-item + .carousel-item {
//         display: block;
//     }
//     .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item {
//         transition: none;
//     }
//     .carousel-inner .carousel-item-next {
//         position: relative;
//         transform: translate3d(0, 0, 0);
//     }
//     /* left or forward direction */
//     .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item {
//         position: relative;
//         transform: translate3d(-100%, 0, 0);
//         visibility: visible;
//     }
//     /* right or prev direction */
//     .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item {
//         position: relative;
//         transform: translate3d(100%, 0, 0);
//         visibility: visible;
//         display: block;
//         visibility: visible;
//     }
// }
/* LG */
// @media (min-width: 991px) {
//     /* show 4th item */
//     .carousel-inner .active + .carousel-item + .carousel-item + .carousel-item {
//         display: block;
//     }
//     .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item + .carousel-item {
//         transition: none;
//     }
//     /* Show 5th slide on lg if col-lg-3 */
//     .carousel-inner .active.col-lg-3.carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
//         position: absolute;
//         top: 0;
//         right: -25%;  /*change this with javascript in the future*/
//         z-index: -1;
//         display: block;
//         visibility: visible;
//     }
//     /* left or forward direction */
//     .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
//         position: relative;
//         transform: translate3d(-100%, 0, 0);
//         visibility: visible;
//     }
//     /* right or prev direction //t - previous slide direction last item animation fix */
//     .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
//         position: relative;
//         transform: translate3d(100%, 0, 0);
//         visibility: visible;
//         display: block;
//         visibility: visible;
//     }
// }

//javascript
// $('#carousel-example').on('slide.bs.carousel', function (e) {
//     /*
//         CC 2.0 License Iatek LLC 2018 - Attribution required
//     */
//     var $e = $(e.relatedTarget);
//     var idx = $e.index();
//     var itemsPerSlide = 5;
//     var totalItems = $('.carousel-item').length;
 
//     if (idx >= totalItems-(itemsPerSlide-1)) {
//         var it = itemsPerSlide - (totalItems - idx);
//         for (var i=0; i<it; i++) {
//             // append slides to end
//             if (e.direction=="left") {
//                 $('.carousel-item').eq(i).appendTo('.carousel-inner');
//             }
//             else {
//                 $('.carousel-item').eq(0).appendTo('.carousel-inner');
//             }
//         }
//     }
// });