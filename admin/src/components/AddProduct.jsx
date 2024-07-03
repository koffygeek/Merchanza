import React from "react";
import upload_area from "../assets/upload_area.svg";
import { MdAdd } from "react-icons/md";

const AddProduct = () => {
  return (
    <div className="p-8 box-border bg-white w-full rounded-sm mt-5 lg:ml-5">
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Product title:</h4>
        <input
          type="text"
          name="name"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-88 w-full py-3 px-4 rounded-md"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Price:</h4>
        <input
          type="text"
          name="old_price"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-88 w-full py-3 px-4 rounded-md"
        />
      </div>
      <div className="mb-3">
        <h4 className="bold-18 pb-2">Offer Price:</h4>
        <input
          type="text"
          name="new_price"
          placeholder="Type here..."
          className="bg-primary outline-none max-w-88 w-full py-3 px-4 rounded-md"
        />
      </div>
      <div className="mb-3 flex items-center gap-x-4">
        <h4>Product Category</h4>
        <select
          name="category"
          id=""
          className="bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none"
        ></select>
        <option value="clothing">Clothing</option>
        <option value="cosmetics">Cosmetics</option>
        <option value="electronics">Electronics</option>
      </div>
      <div>
        <label htmlFor="file-input">
          <img
            src={upload_area}
            alt=""
            className="w-20 rounded-sm inline-block"
          />
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          hidden
          className="bg-primary max-w-80 w-full py-3 px-4"
        />
      </div>
      <button className="btn-dark rounded-lg mt-4 flexCenter gap-x-1">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
