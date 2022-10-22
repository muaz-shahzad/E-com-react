import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Home() {
  return (
    <>
      <section className="header home">
        <div className="container" style={{paddingTop: "50px" }}>
          <div className="row">
            <div className="">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 order-1 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Give Your Workout A New Style!
                  </h1>
                  <p>Success isn't always about greatness. It's about consistency. Consistent hard work gains success. Greatness will come.</p>
                  <div className="mt-2">
                    <NavLink to="service" className="btn-get-started">
                      Explore Now <ArrowForwardIosIcon />
                    </NavLink>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 order-2 order-lg-2 header-img" >
                  <img src="images/Headimg.png" className="img-fluid" alt="home-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
export default Home;
