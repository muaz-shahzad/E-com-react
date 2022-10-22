import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-bootstrap";



function Offer() {
    return (
        <>
            <section className="header off">
                <div className="container offer">
                    <div className="row">
                        <div className="">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 order-1 order-lg-2 d-flex justify-content-center flex-column">
                                    <p style={{fontSize: "20px"}}>Exclusively Available on Red-Store</p>
                                    <h1 style={{fontSize: "45px",fontWeight: "bold"}}>
                                        Smart Band 4
                                    </h1>
                                    <p style={{fontSize: "15px",marginTop: "5px"}}>The Mi smart brand 4 features a 39.9% larger Amoled color full-touch display
                                     with adjustable brightness, so everything is clear as can be </p>
                                    <div className="mt-3">
                                        <NavLink to="service" className="btn-get-started">
                                            Buy Now
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 order-2 text-center order-lg-1">
                                    <img src="images/exclusive.png" className="img-fluid offer-img" alt="home-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offer;