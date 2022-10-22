import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer'
import Product from '../Products/Product';



const Second = () => {
    return (
        <>
            <Navbar />
            <Product/>
            <Footer />
        </>
    )
}

export default Second