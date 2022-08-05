import { useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ news, addToCart }) {
  const [number, setNumber] = useState(1);
  const { id } = useParams();

  // function addToCart(item, amount) {
  //   const check_index = cart.findIndex((c) => c.id === item.id);
  //   if (check_index !== -1) {
  //     console.log(check_index);
  //     cart[check_index].quantity++;
  //     console.log("Quantity updated:", cart);
  //   } else {
  //     setCart({ ...cart, quantity: amount });
  //     console.log("The product has been added to cart:", cart);
  //   }
  // }

  const increaseNumber = () => {
    setNumber(number + 1);
  };
  const decreaseNumber = () => {
    if (number <= 1) {
      setNumber(1);
    } else {
      setNumber(number - 1);
    }
  };

  const product = news.filter((f) => f.id === Number(id));

  return (
    <div className="product-detail">
      {product.map((item) => {
        const rating = item["rating"];
        return (
          <div className="information-product-detail" key={item.id}>
            <div className="image-main">
              <img src={`${item.image}`} alt="" />
            </div>
            <div className="content-product">
              <div className="product-detail-name">
                <p>{item.title}</p>
              </div>
              <div className="star">
                <span className="rate-star">
                  {rating.rate} <i className="fa-solid fa-star"></i>
                </span>
                <span className="count">
                  Đã bán <span className="number">{rating.count}</span>
                </span>
              </div>
              <div className="price-product">
                <span>{item.price}$</span>
              </div>
              <div className="decription-product">
                <span>{item.description}</span>
              </div>
              <div className="amount">
                <button onClick={increaseNumber}>+</button>
                <input type="text" value={number} />
                <button onClick={decreaseNumber}>-</button>
              </div>
              <div className="btn-add-cart">
                <button type="submit" onClick={() => addToCart(item, number)}>
                  Thêm vào giỏ hàng{" "}
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductDetail;
