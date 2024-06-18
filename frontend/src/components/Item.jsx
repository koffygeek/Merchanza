import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";

const item = ({ id, name, image, old_price, new_price }) => {
  return (
    <Link to={`/product/${id}`} className=" bg-white rounded-xl p-4 relative">
      <div className="flexCenter">
        <img
          src={image}
          alt="image"
          height={"211px"}
          width={"211px"}
          className="rounded-lg drop-shadow-xl absolute bottom-44"
        />
      </div>
      <div className="flex flex-col gap-y-4 pt-24">
        <h4 className="line-clamp-2 medium-16">{name}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae.</p>
        <div className="flexBetween">
          <div className="flex gap-x-4 medium-16">
            <span>${new_price}.00</span>
            <span className="line-through text-secondary">${old_price}.00</span>
          </div>
          <RiShoppingCart2Line className="p-2 h-10 w-10 hover:text-secondary" />
        </div>
      </div>
    </Link>
  );
};

export default item;
