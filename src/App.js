import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Menswear from "./Pages/Menswear";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/menswear" exact={true} element={<Menswear/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
