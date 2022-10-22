import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle";
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
  Navigate
} from "react-router-dom";
import ScrollTop from './ScrollTop';
import First from './Pagess/First';
import Second from './Pagess/Second';
// import ProductDetails from './Products/ProductDetails/ProductDetails'
import ProductDetails from './Products/ProductDetails/ProductDetails';
import Product from './Products/Product';
import Cart from './Cart';
function App() {
  return (
    <>
    
      <ScrollTop />
      {/* <Product/> */}
      {/* <Cart/> */}
      {/* <Product/> */}
      {/* <Navbar/>
      <Home/>
      <Pic3 />
      <FeaturedProduct/>
      <Offer/>
      <LatestProduct/>
      <Brands/>
      <Footer/> */}
      {/* <Featured /> */}
      {/* <Home/>
      <Featured />
      <Latest/>
      <Offer/>
      <Brands/>
      <Footer/> */}
      <Routes>
     <Route path="/" element={<First/>}></Route>
     <Route path="/product" element={<Second/>}></Route>
     <Route path="/productdetails" element={<ProductDetails/>}></Route>
     {/* <Route path="/service" element={<Service/>}></Route>
     <Route path="/contact" element={<Contact/>}></Route>
     <Route path="/skill" element={<Skills/>}></Route> */}
     <Route path="*" element={<Navigate to="/" />}  />
     </Routes>
    </>
  )
}

export default App;