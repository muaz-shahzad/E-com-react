import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";

function Navbar() {
    const [initial, update] = useState(0);
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink exact="true" className="navbar-brand" to="/">
                                    <img id="img1" className="img-fluid" src="images/logo1.png" alt="" />
                                </NavLink>
                                <div className="nav-item dropdown">
                                    <button className="btn category" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span><i className="fa fa-bars" aria-hidden="true"></i></span> All Categories
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="Health_Beauty.html">Health & Beauty</a>
                                        <a className="dropdown-item" href="#">PC & Laptops</a>
                                        <a className="dropdown-item" href="#">Gaming</a>
                                        <a className="dropdown-item" href="#">Cars & Bikes</a>
                                        <a className="dropdown-item" href="#">Men's Fashion</a>
                                        <a className="dropdown-item" href="#">Women's Fashion</a>
                                        <a className="dropdown-item" href="#">Phones & Devices</a>
                                        <a className="dropdown-item" href="#">Fitness</a>
                                        <a className="dropdown-item" href="#">Cameras</a>
                                    </div>
                                </div>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon">
                                    </span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item active">
                                            <NavLink exact="true" className="nav-link " aria-current="page" to="/">
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink exact="true" className="nav-link scrollto" to="/product">
                                                Products
                                            </NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink exact="true" className="nav-link" to="/skill">
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink exact="true" className="nav-link" to="/about">
                                                Contact
                                            </NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink exact="true" className="nav-link" to="/contact">
                                                <AccountCircleIcon style={{fontSize: "30px",marginTop: "-5px"}}/>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item active">
                                            <NavLink exact="true" className="nav-link" to="/">
                                                <ShoppingCartIcon style={{fontSize: "30px",marginTop: "-5px"}}/><sup>{initial}</sup>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar;
