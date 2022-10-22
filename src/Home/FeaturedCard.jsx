import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";



const FeaturedCard = (props) => {
    return (
        <>
            <div className="col-sm-12 col-md-9 col-lg-3 col-xl-3 col-9" style={{width: "fit-content"}}>
                <div className="card" style={{width: "200px"}}>
                    <img src={props.img} className="img-fluid" alt="..." />
                </div>
                <h4 className="card-title">{props.title}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p style={{ fontSize: "14px" }}>{props.price}</p>

            </div>

        </>
    )
}

export default FeaturedCard