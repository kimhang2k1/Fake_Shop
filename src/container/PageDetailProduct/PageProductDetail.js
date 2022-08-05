import "./ProductDetail.css";
import { CartProvider } from "react-use-cart";
import Header from "../../component/Header/Header";
import ProductDetail from "../../component/ProductDetail/ProductDetail";

function PageProductDetail({ news, addToCart }) {
  return (
    <>
      <CartProvider>
        <Header />
        <ProductDetail news={news} addToCart={addToCart} />
      </CartProvider>
    </>
  );
}

export default PageProductDetail;
