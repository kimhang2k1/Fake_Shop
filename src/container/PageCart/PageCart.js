import Cart from "../../component/Cart/Cart";
import Header from "../../component/Header/Header";
import "./PageCart.css";
function PageCart({
  cart,
  deleteCart,
  increase,
  decrease,
  disableIncrease,
  disableDecrease,
}) {
  return (
    <>
      <Header />
      <Cart
        cart={cart}
        deleteCart={deleteCart}
        increase={increase}
        decrease={decrease}
        disableIncrease={disableIncrease}
        disableDecrease={disableDecrease}
      />
    </>
  );
}

export default PageCart;
