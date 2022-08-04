import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [number, setNumber] = useState(1);
  const { id } = useParams();

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
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProduct(json);
      });
  }, [id]);
  const { image, title, description, price } = product;

  const addToCart = (e) => {
    e.preventDefault();
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: 5,
        date: Date.now,
        product: [
          {
            productId: id,
            quanlity: number,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      });
  };

  return (
    <div className="product-detail">
      <div className="information-product-detail">
        <div className="image-main">
          <img src={`${image}`} alt="" />
        </div>
        <div className="content-product">
          <div className="product-detail-name">
            <p>{title}</p>
          </div>
          <div className="star">
            <span className="rate-star">
              {product?.rating?.rate} <i className="fa-solid fa-star"></i>
            </span>
            <span className="count">
              Đã bán <span className="number">{product?.rating?.count}</span>
            </span>
          </div>
          <div className="price-product">
            <span>{price}$</span>
          </div>
          <div className="decription-product">
            <span>{description}</span>
          </div>
          <div className="amount">
            <button onClick={increaseNumber}>+</button>
            <input type="text" value={number} />
            <button onClick={decreaseNumber}>-</button>
          </div>
          <div className="btn-add-cart">
            <button onClick={(e) => addToCart(e)}>
              Thêm vào giỏ hàng <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
