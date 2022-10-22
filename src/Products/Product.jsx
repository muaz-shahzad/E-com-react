import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Pcard from "./Pcard"
import { Pdata } from "../Alldata";
import { useNavigate } from 'react-router-dom';
import ProductDetails from "./ProductDetails/ProductDetails";
import { Link } from "react-router-dom";
// import { useState } from "react";



function Product() {
    let Pc = [];
    let ID = [];
    // const [state, setstate] = useState()
    const navigate = useNavigate();
    let key;
    const Select_img = (id) => {
        console.log("Chl raha hay")
        const names = [id];
        // // const names1 = [props];
        Pc = JSON.parse(localStorage.getItem('Pic'));
        // console.log("LocalStorage say a raha hay ye => ", Pc[names]);
        const idNo = names;
        localStorage.setItem('ID', JSON.stringify(idNo));
        ID = JSON.parse(localStorage.getItem('ID'));
        // console.log("Id ja rhi hay local storage m => ", ID);
        navigate("/productdetails")


    }

    return (
        <>
            <section className="header">
                <div className="container col-8 mt-5">
                    <div className="row" >
                        <div className="col-sm-12 col-md-5 col-lg-4 col-xl-3 text-center">
                            <h1 className="mt-3" style={{ fontSize: "28px" }}>
                                All Products
                            </h1>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3  offset-md-3 offset-lg-5 offset-xl-6 text-center">
                            <select className="mt-4" name="" id="" style={{ width: "auto" }}>
                                <option value="">Default</option>
                                <option value="">New Arrival</option>
                                <option value="">Mega Sale</option>
                                <option value="">Low Price</option>
                                <option value="">Highest Reviews</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="container mt-3 col-8" >
                    <div className="row gy-3" id="pic">
                        {
                            Pdata.map((val, key) => {
                                return <Pcard
                                    key={key}
                                    id={val.key}
                                    img={val.img}
                                    title={val.title}
                                    price={val.price}
                                    Selected_Image={Select_img}
                                />
                            })
                        }
                    </div>
                    <div className="page-btn mt-5">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        {/* <ArrowForwardIosIcon /> */}
                    </div>
                </div>

            </section>
            {/* <Firstname.Provider value={"Muaz Shahzad"}>
                <ProductDetails />
            </Firstname.Provider> */}
        </>
    )
}

export default Product;
