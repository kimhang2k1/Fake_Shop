function ItemProductDetail({ pro }) {
  //   const rateProduct = pro["rating"];
  return (
    <div className="information-product-detail">
      <div className="image-main">
        <img src={`${pro.image}`} alt="" />
      </div>
      <div className="content-product">
        <div className="product-detail-name">
          <p>{pro.title}</p>
        </div>
        <div className="star">
          <span className="rate-star">
            {/* {rateProduct.rate} <i className="fa-solid fa-star"></i> */}
          </span>
          <span className="count">
            {/* Đã bán <span className="number">{rateProduct.count}</span> */}
          </span>
        </div>
        <div className="price-product">
          <span>{pro.price}$</span>
        </div>
        <div className="decription-product">
          <span>{pro.decription}</span>
        </div>
        <div className="btn-add-cart">
          <button>
            Thêm vào giỏ hàng <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemProductDetail;
