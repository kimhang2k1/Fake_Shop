function FilterProduct({ category, currentSelected, sortPrice }) {
  return (
    <div className="filter-product">
      <div className="sort-by-product">
        <div className="filter-category">
          <span>Danh mục sản phẩm :</span>
          <select onChange={(e) => currentSelected(e)}>
            <option value="">Tất cả</option>;
            {category.map((cat, index) => {
              return (
                <option key={index} value={cat}>
                  {cat}
                </option>
              );
            })}
          </select>
        </div>
        <div className="filter-price">
          <span>Giá</span>
          <select onChange={(e) => sortPrice(e)}>
            <option value="asc">Từ thấp đến cao</option>
            <option value="desc">Từ cao đến thấp</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterProduct;
