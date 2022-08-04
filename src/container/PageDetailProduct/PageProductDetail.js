import "./ProductDetail.css";

import Header from "../../component/Header/Header";
import ProductDetail from "../../component/ProductDetail/ProductDetail";

function PageProductDetail({ product }) {
  return (
    <>
      <Header />
      <ProductDetail product={product} />
    </>
  );
}

export default PageProductDetail;
