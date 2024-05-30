import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import Product from "./pages/Product.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main className="text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothing" element={<Category />} />
          <Route path="/cosmetics" element={<Category />} />
          <Route path="/electronics" element={<Category />} />
          <Route path="/product" element={<Category />} />
          <Route path=":productId" element={<Product />}></Route>
          {/* <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
