import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Product from "./pages/Product.jsx";
import Footer from "./components/Footer.jsx";
import clothingbanner from "./assets/clothingbanner.png";
import cosmeticsbanner from "./assets/cosmeticsbanner.png";
import electronicsbanner from "./assets/electronicsbanner.png";

export default function App() {
  return (
    <main className="text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/clothing"
            element={<Category category={"clothing"} banner={clothingbanner} />}
          />
          <Route
            path="/cosmetics"
            element={
              <Category category={"cosmetics"} banner={cosmeticsbanner} />
            }
          />
          <Route
            path="/electronics"
            element={
              <Category category={"electronics"} banner={electronicsbanner} />
            }
          />
          <Route path="/product" element={<Product />} />
          <Route path=":productId" element={<Product />}></Route>
          {/* <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
