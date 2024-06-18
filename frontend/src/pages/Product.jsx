import { useParams } from "react-router-dom";
import ProductHd from "../components/ProductHd";
import all_products from "../assets/all_products";

const Product = () => {
  const { ProductId } = useParams();
  console.log("ProductId:", ProductId);

  const product = all_products.find((e) => e.id === Number(ProductId));
  if (!product) {
    return <div>Product Not Found</div>;
  }
  // or redirect user to 404 page
  return (
    <section>
      <div>
        <ProductHd product={product} />
      </div>
    </section>
  );
};

export default Product;
