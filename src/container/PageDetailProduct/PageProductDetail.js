import "./ProductDetail.css";
import { CartProvider } from "react-use-cart";
import Header from "../../component/Header/Header";
import ProductDetail from "../../component/ProductDetail/ProductDetail";

function PageProductDetail({
  news,
  addToCart,
  show,
  closeModal,
  getProductById,
}) {
  return (
    <>
      <CartProvider>
        <Header />
        <ProductDetail
          news={news}
          addToCart={addToCart}
          show={show}
          closeModal={closeModal}
          getProductById={getProductById}
        />
      </CartProvider>
    </>
  );
}

export default PageProductDetail;
