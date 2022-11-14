import React from "react";
import NavbarSebelumLogin from "./../componen/navbar2";
import CardsProduct from "./../componen/CardsProduct";
// import CarouselCategory from "./../componen/carousul";


export default function Home() {
    return (
        <div>
            <NavbarSebelumLogin/> 
            <div className="container">
                {/* carausel */}
                {/* <CarouselCategory/> */}
                <h4>New</h4>
                <p>You’ve never seen it before!</p>
                <div className="daftarProduct ">
                    <div className="row d-flex justify-content-center g-5">
                        <div className="col-lg-2 col-6 mr-2">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>

                    </div>
                </div>
                <h4 className="mt-5">Popular</h4>
                <p>Find clothes that are trending recently</p>
                <div className="daftarProduct ">
                    <div className="row d-flex justify-content-center g-5">
                        <div className="col-lg-2 col-6 mr-2">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>
                        <div className="col-lg-2 col-6">
                            <CardsProduct name='Mens formal suit - Black & White' price='$ 400.000' toko='Zalora Cloth'/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

