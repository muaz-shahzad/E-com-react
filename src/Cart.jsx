import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function Cart() {
    return (
        <>
            <section className="header">
                <div className="container col-8 mt-5">
                    <div className="row" style={{ border: "2px solid purple" }}>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center" style={{ border: "2px solid black" }}>
                            <h1 className="mt-3" style={{ fontSize: "28px" }}>
                                Products
                            </h1>
                        </div>
                    </div>
                    <div className="row mt-3" style={{ border: "2px solid purple" }}>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 pcard" style={{ border: "2px solid red" }}>
                            <div className="card" style={{ width: "auto" }}>
                                <img src="images/buy-1.jpg" className="img-fluid" alt="..." />
                            </div>
                            <h4 className="card-title">Red Printed T-shirt</h4>
                            <p style={{ fontSize: "14px" }}>Price: $50</p>
                            <div className="row">
                                <div className="col-lg-6" style={{ border: "2px solid pink" }}>
                                    <h6>Qty: 3</h6>
                                </div>
                                <div className="col-lg-6 text-end" style={{ border: "2px solid pink" }}>
                                    <h6>Total: 150</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 pcard" style={{ border: "2px solid red" }}>
                            <div className="card" style={{ width: "auto" }}>
                                <img src="images/buy-1.jpg" className="img-fluid" alt="..." />
                            </div>
                            <h4 className="card-title">Red Printed T-shirt</h4>
                            <p style={{ fontSize: "14px" }}>Price: $50</p>
                            <div className="row">
                                <div className="col-lg-6" style={{ border: "2px solid pink" }}>
                                    <h6>Qty: 3</h6>
                                </div>
                                <div className="col-lg-6 text-end" style={{ border: "2px solid pink" }}>
                                    <h6>Total: 150</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 pcard" style={{ border: "2px solid red" }}>
                            <div className="card" style={{ width: "auto" }}>
                                <img src="images/buy-1.jpg" className="img-fluid" alt="..." />
                            </div>
                            <h4 className="card-title">Red Printed T-shirt</h4>
                            <p style={{ fontSize: "14px" }}>Price: $50</p>
                            <div className="row">
                                <div className="col-lg-6" style={{ border: "2px solid pink" }}>
                                    <h6>Qty: 3</h6>
                                </div>
                                <div className="col-lg-6 text-end" style={{ border: "2px solid pink" }}>
                                    <h6>Total: 150</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 pcard" style={{ border: "2px solid red" }}>
                            <div className="card" style={{ width: "auto" }}>
                                <img src="images/buy-1.jpg" className="img-fluid" alt="..." />
                            </div>
                            <h4 className="card-title">Red Printed T-shirt</h4>
                            <p style={{ fontSize: "14px" }}>Price: $50</p>
                            <div className="row">
                                <div className="col-lg-6" style={{ border: "2px solid pink" }}>
                                    <h6>Qty: 3</h6>
                                </div>
                                <div className="col-lg-6 text-end" style={{ border: "2px solid pink" }}>
                                    <h6>Total: 150</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container col-8 mt-4" style={{ border: "2px solid red" }}>
                <div className="row">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 offset-lg-8" style={{ border: "2px solid purple" }}>
                       <h5>SubTotal</h5>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2" style={{ border: "2px solid purple" }}>
                       <h5>$200</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 offset-lg-8" style={{ border: "2px solid purple" }}>
                       <h5>Tax</h5>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2" style={{ border: "2px solid purple" }}>
                       <h5>$35</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 offset-lg-8" style={{ border: "2px solid purple" }}>
                       <h5>Total</h5>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2" style={{ border: "2px solid purple" }}>
                       <h5>$235</h5>
                    </div>
                    
                    
                </div>


                </div>
            </section>
        </>
    )
}

export default Cart;
