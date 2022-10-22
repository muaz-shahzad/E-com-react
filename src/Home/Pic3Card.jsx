import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const Pic3Card = (prop) => {

    return (
        <>
            
                <div className="col col-sm-12 col-md-4 col-lg-4 col-10" >
                    <div className="card">
                        <img src={prop.img} className="card-img-top img-fluid" alt="..." style={{ height: "auto" }} />
                    </div>
                </div>
        </>
    )
}

export default Pic3Card;