import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="cart">
      <Link to="/cart">
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </div>
  );
}

export default Cart;
