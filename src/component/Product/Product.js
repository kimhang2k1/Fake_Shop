import ItemProduct from "./ItemProduct/ItemProduct";

function Product({ news, getProductById }) {
  const product = getProductById();
  return (
    <>
      <div id="product">
        <h2>Sản Phẩm</h2>
        <div className="product">
          {product.map((item, index) => {
            return <ItemProduct key={index} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Product;
