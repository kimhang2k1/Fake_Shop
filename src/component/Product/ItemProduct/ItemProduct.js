import { Link } from "react-router-dom";

function ItemProduct({ item }) {
  const rate = item["rating"];
  return (
    <>
      <div className="item-product" key={item.id}>
        <div className="product-image">
          <Link to={`/product/${item.id}`}>
            <img src={item.image} alt="" />{" "}
          </Link>
        </div>
        <div className="information-product">
          <div className="product-name">
            <Link to={`/products/${item.id}`}>
              <p>{item.title}</p>
            </Link>
          </div>
          <div className="price">
            <span className="text-price">{item.price}$</span>
            <span className="count-buy">Đã bán {rate.count}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemProduct;
