import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Menswear from "./Pages/Menswear";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import Product from ".Pages/Product";
import ProductPage from "./Pages/Product/productpage";
import CartPage from "./Pages/Cart/cartpage";
import Womenswear from "./Pages/Womenswear/womenswear";
import Signup from "./Pages/Signup/signup";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/menswear" exact={true} element={<Menswear/>}/>
        <Route path="/womenswear" exact={true} element={<Womenswear/>}/>
        <Route path="/product" exact={true} element={<ProductPage/>}/>
        <Route path="/cart" exact={true} element={<CartPage/>}/>
        <Route path="/signup" exact={true} element={<Signup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
