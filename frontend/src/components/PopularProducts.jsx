import React from "react";
import POPULAR from "../assets/popular";

const PopularProducts = () => {
  return (
    <section>
      {/* {title} */}
      <div>
        <h3>Popular Products</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quae
          doloribus vero dolores adipisci quaerat tempora dolorem, modi porro
          doloremque sed cumque eveniet ut dignissimos amet alias? Labore,
          molestiae excepturi.
        </p>
      </div>
      {/* {container} */}
      <div>{POPULAR}</div>
    </section>
  );
};

export default PopularProducts;
