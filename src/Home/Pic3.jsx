import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Pic3Card from "./Pic3Card";
import { Pcard } from "../Alldata";

function Pic3() {
    return (
        <>
            <section className="header" >
                <div className="container mb-5 mt-5" >
                    <div className="small-container" >
                        <div className="row col-12">
                            {
                                Pcard.map((val, key) => {
                                    return <Pic3Card
                                        img={val.img}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            {/* Product */}
            {/* <section className="header" id="service" style={{ border: "2px solid black" }}>
                <div className="my-4 heading" >
                    <h1 style={{fontSize: "32px"}} className="fe">
                        Featured Products
                    </h1>
                </div>
                <div className="container mb-5 my-2" style={{ border: "2px solid pink" }}>
                    <div className="row mt-5" >
                        <div className="" >
                            <div className="row gy-4" >
                                <div className="col-sm-12 col-md-6 col-lg-3 col-10 mx-auto" style={{ height: "auto" }}>
                                    <div className="card" style={{ height: "auto" }}>
                                        <img src="images/product-1.jpg" className="card-img-top img-fluid" alt="..." style={{ height: "auto" }} />
                                    </div>
                                    <h4 className="card-title">Red Printed T-shirt</h4>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <p style={{fontSize: "14px"}}>$50</p>

                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3 col-10 mx-auto" style={{ height: "auto" }}>
                                    <div className="card" style={{ height: "auto" }}>
                                        <img src="images/product-2.jpg" className="card-img-top img-fluid" alt="..." style={{ height: "auto" }} />
                                    </div>
                                    <h4 className="card-title">Red Printed T-shirt</h4>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <p>$50</p>

                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3 col-10 mx-auto" style={{ height: "auto" }}>
                                    <div className="card" style={{ height: "auto" }}>
                                        <img src="images/product-3.jpg" className="card-img-top img-fluid" alt="..." style={{ height: "auto" }} />
                                    </div>
                                    <h4 className="card-title">Red Printed T-shirt</h4>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <p>$50</p>

                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3 col-10 mx-auto" style={{ height: "auto" }}>
                                    <div className="card" style={{ height: "auto" }}>
                                        <img src="images/product-4.jpg" className="card-img-top img-fluid" alt="..." style={{ height: "auto" }} />
                                    </div>
                                    <h4 className="card-title">Red Printed T-shirt</h4>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <p>$50</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Pic3;