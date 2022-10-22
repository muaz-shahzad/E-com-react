import React, { useContext } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-bootstrap";
import { gallery } from "../../Alldata";
import { useState, useEffect } from 'react';
import Related from "./Related";
import Navbar from '../../Home/Navbar';

let QTY = [];
let get = [];
let DATA = [];
let ADD = [];
let GET = [];
let drop = "";

function ProductDetails() {
    const [initial, update] = useState([]);

    // Local Storage
    const IDs = JSON.parse(localStorage.getItem('ID'));
    // console.log("Product ID => ", IDs);
    const Pc = JSON.parse(localStorage.getItem('Pic'));
    // console.log("Complete Data Of ID => ", Pc[IDs]);

    const PC = Pc[IDs];
    const Image = Pc[IDs].img
    const IID = Pc[IDs].key
    const Title = Pc[IDs].title
    const Price = Pc[IDs].price
    // console.log("Image Of ID => ", Image);
    // console.log("Title Of ID => ", Title);
    // console.log("Price Of ID => ", Price);
    // console.log("ID Of ID => ", IID);

    const [curr, upd] = useState(1);
    const [items, setitems] = useState([])
    const [state, setstate] = useState(Image)
    const [Qty, updQty] = useState([])
    const showGallery = (val) => {
        console.log(val)
        return setstate(val)

    }
    function changeStatus(e) {
        drop = e.target.value
        DATA = { IID, drop }
        setitems([...items, DATA])
        console.log("Key and Selected =>", items);
        GET = JSON.parse(localStorage.getItem('items'));
        GET = GET ? JSON.parse(localStorage.getItem('items')) : [];
        GET.push(DATA);
        localStorage.setItem('items', JSON.stringify(GET));

        console.log("Final Key & Selected_Value =>", GET);
    }
    function changeQty(e) {
        let qty = e.target.value
        get = { IID, qty }
        updQty([...Qty, get])
        console.log("Key and Qty =>", Qty);
        QTY = JSON.parse(localStorage.getItem('Qty'));
        QTY = QTY ? JSON.parse(localStorage.getItem('Qty')) : [];
        QTY.push(get);
        localStorage.setItem('Qty', JSON.stringify(QTY));

        console.log("Final Key & Quantity =>", QTY);

    }
    const Cart = () => {
        console.log("Add to Cart Chl raha hay")
        // update([...initial,])
        // console.log("ID DATA => " , PC);
        update([...initial, PC]);
        console.log("ID DATA =>", initial);
        ADD = JSON.parse(localStorage.getItem('initial'));
        ADD = ADD ? JSON.parse(localStorage.getItem('initial')) : [];
        ADD.push(PC);
        // ADD.push(drop);
        localStorage.setItem('initial', JSON.stringify(ADD));
        // GET = JSON.parse(localStorage.getItem(data));
        console.log("Final Data =>", ADD);

    }
    useEffect(() => {
        if (localStorage.getItem('initial'))
            update(JSON.parse(localStorage.getItem('initial')));
        if (localStorage.getItem('items'))
            setitems(JSON.parse(localStorage.getItem('items')));
        if (localStorage.getItem('Qty'))
            updQty(JSON.parse(localStorage.getItem('Qty')));
    }, []);

    return (
        <>
            <Navbar />
            <section className="header PD">
                <div className="container offer col-8" >
                    <div className="row mt-5">
                        <div className="">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6  order-2 order-lg-2 d-flex justify-content-center flex-column" >
                                    <p className="Pp mt-5" style={{ fontWeight: "bold" }}>Home / T-shirt </p>
                                    <h1 className="mt-3 Ph" style={{ fontSize: "30px", fontWeight: "bold" }}>
                                        {Title}
                                    </h1>
                                    <h4 className="mt-3">{Price}</h4>
                                    <select onChange={changeStatus} id="dropdown" className="mt-4" style={{ width: "fit-content" }}>
                                        <option>Select Size</option>
                                        <option value="XXL">XXL</option>
                                        <option value="XL">XL</option>
                                        <option value="Large">Large</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Small">Small</option>
                                    </select>
                                    <input className="mt-3" onChange={changeQty} style={{ width: "fit-content" }} type="number" id="quantity" name="quantity" placeholder="Qty" min="1" max="10" />
                                    <div className="mt-5">
                                        <NavLink id={IID} onClick={Cart} to="service" className="btn-get-started">
                                            Add To Cart
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 order-1 text-center order-lg-1">
                                    <img src={state} className="img-fluid " alt="home-img" />
                                    <div className="row " >
                                        {
                                            gallery.map((val, id) => {
                                                return <div key={id} className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 mx-auto" style={{ cursor: "pointer" }}>
                                                    <img onClick={() => showGallery(val.img)} src={val.img} className="img-fluid mt-2 gal" alt="home-img" />
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Related />
            </section>
        </>
    )
}
export default ProductDetails;