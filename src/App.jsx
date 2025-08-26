import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header.jsx";
import UpperFilter from "./components/UpperFilter.jsx";
import FilterPanel from "./components/FilterPanel.jsx";
import ProductListing from "./components/ProductListing.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import Footer from "./components/Footer.jsx";
import Cart from "./components/Cart";
import { useContext } from "react";
import { Context } from "./context/Context";
import NotFound from "./components/NotFound";
function App() {
  const { selectedProduct } = useContext(Context); // product to show in ProductDetails

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="left">
                <UpperFilter />
                <FilterPanel />
              </div>
              <div className="right">
                <ProductListing />
              </div>
            </div>
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetails product={selectedProduct} />}
        />
        <Route path="cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    
    </Router>
  );
}

export default App;
