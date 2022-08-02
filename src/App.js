import React from "react";
import { Routes, Route} from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import AboutpageComponent from "./Pages/AboutpageComponent/AboutpageComponent";
import HomepageComponent from "./Pages/HomepageComponent/HomepageComponent";
import "./App.style.scss";
import Products from "./Components/ProductComponents/Products";
import SigninSignupPage from "./Pages/SigninSignupPage/SigninSignupPage";
import ProductsDetail from "./Components/ProductComponents/ProductsDetail";


function App() {
  
 
  return (
    <div>
      <div className="grid-container">
        <HeaderComponent />
          <Routes>
            <Route exact path="/" element={<HomepageComponent />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductsDetail />} />
            <Route path="/about" element={<AboutpageComponent />} />
            <Route path="/signin" element={<SigninSignupPage />} />
          </Routes>  
      </div>
    </div>
  );
}

export default App;
