import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Offer = () => {
  return (
    <section className="max-padd-container bg-banneroffer bg-cover bg-center w-full">
      <div className="px-4 py-16 md:py-24 lg:py-44">
        <h2 className="h2">Spring Sale 50% Off!</h2>
        <h3 className="medium-32 capitalize font-normal">
          Grab <span className="text-secondary">Your Favorites</span> Before
          They Are Gone!
        </h3>
        <Link
          to={"/"}
          className="text-white rounded-full h-12 w-32 p-4 group-hover:-rotate-45 transition-all duration-500 border-2 border-white"
        >
          Go to Shop
          <FaArrowRightLong className="text-xl bg-secondary text-primary rounded-full h-12 w-12 p-4 group-hover:-rotate-45 transition-all duration-500 border-2 border-white" />
        </Link>
      </div>
    </section>
  );
};

export default Offer;
