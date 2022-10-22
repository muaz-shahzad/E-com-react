import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from '../Home/Navbar';
import Home from '../Home/Home';
import Pic3 from '../Home/Pic3';
import FeaturedProduct from '../Home/FeaturedProduct';
import LatestProduct from '../Home/LatestProduct';
import Offer from '../Home/Offer'
import Brands from '../Home/Brands'
import Footer from '../Home/Footer'



const First = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Pic3 />
            <FeaturedProduct />
            <Offer />
            <LatestProduct />
            <Brands />
            <Footer />
        </>
    )
}

export default First