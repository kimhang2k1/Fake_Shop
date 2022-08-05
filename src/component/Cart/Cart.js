function Cart({
  cart,
  deleteCart,
  increase,
  decrease,
  disableDecrease,
  disableIncrease,
}) {
  return (
    <div className="cart">
      <div className="list-product-cart">
        <h1>Giỏ Hàng</h1>
        <div className="list">
          <table>
            <tbody>
              <tr>
                <td>Ảnh Sản Phẩm</td>
                <td>Tên Sản Phẩm</td>
                <td>Giá SP</td>
                <td>Số Lượng</td>
                <td>Thành Tiền</td>
                <td></td>
              </tr>
              {cart.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        className="image-cart"
                        src={`${item.image}`}
                        alt=""
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        className="btn-amount"
                        onClick={() => decrease(item)}
                        disabled={disableDecrease}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <input
                        type="text"
                        className="inputAmount"
                        placeholder=""
                        value={item.quantity}
                        disabled
                      />
                      <button
                        className="btn-amount"
                        onClick={() => increase(item)}
                        disabled={disableIncrease}
                      >
                        {" "}
                        +{" "}
                      </button>
                    </td>
                    <td>{item.quantity * item.price}</td>
                    <td onClick={() => deleteCart(item)}>Xóa</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
