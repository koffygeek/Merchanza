import React from "react";
import SideBar from "../components/SideBar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";

const Admin = () => {
  return (
    <div>
      <SideBar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
