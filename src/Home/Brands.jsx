import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Brand } from "../Alldata";



function Brands() {
    return (
        <>
            {/* Brands */}
            <section className="header" id="service" >
                <div className="container mb-5 mt-5" >
                    <div className="row mt-5">
                        <div className="" >
                            <div className="row gy-4 mt-5" >
                                {
                                    Brand.map((val, key) => {
                                        return <div className="col-sm-4 col-md-2 col-lg-2 col-4 mx-auto">
                                            <div className="" >
                                                <img src={val.img} className="brands img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Brands;