import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";


function Footer() {
    return (
        <>
            <footer className="text-center text-lg-start">
                <div className="foot text-center p-3">
                    <p>All Rights Reserved | Terms & Conditions</p>
                    © 2022 Copyright:<a style={{textDecoration: "none",color: "white"}} className="text-dark" target="_blank" href="https://instagram.com/muaz.shahzad?utm_medium=copy_link"> M Muaz Shahzad</a>
                </div>
            </footer>
        </>
    )
}
export default Footer;