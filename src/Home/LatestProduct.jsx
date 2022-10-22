import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import LatestCard from "./LatestCard";
import { Lcard } from "../Alldata";



function LatestProduct() {
    return (
        <>
            {/* Product */}
            <section className="header">
                <div className="heading text-center">
                    <h1 style={{ fontSize: "32px" }}>
                        Latest Products
                    </h1>
                </div>
                <div className="container col-12 mb-5 my-2 mt-4" style={{width: "fit-content" }}>
                    <div className="row  fr">
                        <div className="" >
                            <div className="row gy-1">
                                {
                                    Lcard.map((val, key) => {
                                        return <LatestCard
                                            img={val.img}
                                            title={val.title}
                                            price={val.price}
                                        />
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

export default LatestProduct;