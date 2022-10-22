import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import FeaturedCard from "./FeaturedCard";
import { Fcard } from "../Alldata";
function FeaturedProduct() {
    return (
        <>
            {/* Product */}
            <section className="header">
                <div className="heading text-center">
                    <h1 style={{ fontSize: "32px" }}>
                        Featured Products
                    </h1>
                </div>
                <div className="container col-12 mb-5 my-2 mt-4" style={{width: "fit-content" }}>
                    <div className="row  fr">
                        <div className="" >
                            <div className="row gy-1">
                                {
                                    Fcard.map((val, key) => {
                                        return <FeaturedCard
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

export default FeaturedProduct;