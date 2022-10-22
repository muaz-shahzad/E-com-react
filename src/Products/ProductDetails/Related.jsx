import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Pcard from "../Pcard"
import { Rdata } from "../../Alldata";


function Related() {
    return (
        <>
            <section className="header">
                <div className="container col-8 mt-5">
                    <div className="row" >
                        <div className="col-sm-12 col-md-5 col-lg-4 col-xl-3 text-center">
                            <h1 className="mt-3" style={{ fontSize: "28px" }}>
                                Related Products
                            </h1>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3  offset-md-3 offset-lg-5 offset-xl-6 text-center">
                            <h5 className="mt-4">View More</h5>
                        </div>
                    </div>
                </div>
                <div className="container mt-3 col-8">
                    <div className="row gy-3">
                        {
                            Rdata.map((val, key) => {
                                return <Pcard
                                    id={key}
                                    img={val.img}
                                    title={val.title}
                                    price={val.price}
                                />
                            })
                        }
                    </div>
                </div>

            </section>
        </>
    )
}

export default Related;
