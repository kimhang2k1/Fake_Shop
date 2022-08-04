import ItemCart from "./ItemCart/ItemCart";

function Cart() {
  return (
    <div className="cart">
      <div className="list-product-cart">
        <h1>Giỏ Hàng</h1>
        <div className="list">
          <table>
            <tbody>
              <tr>
                <td>STT</td>
                <td>Ảnh Sản Phẩm</td>
                <td>Tên Sản Phẩm</td>
                <td>Giá SP</td>
                <td>Số Lượng</td>
                <td>Thành Tiền</td>
                <td></td>
              </tr>
              <ItemCart />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cart;
