import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";


function Pcard(props) {
    return (
        <>

            <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-3 pcard" id={props.id}>
                <div className="card" style={{ width: "auto" }} id={props.id} >
                    <img  src={props.img} className="img-fluid" alt="..." 
                    onClick={() => {
                        props.Selected_Image(props.id)
                    }}></img>
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

export default Pcard;
