import "./Home.css";

import Header from "../../component/Header/Header";
import FilterProduct from "../../component/Product/FilterProduct/FilterProduct";
import Product from "../../component/Product/Product";

function Home({ news, category, currentSelected, sortPrice }) {
  return (
    <>
      <Header />
      <FilterProduct
        category={category}
        currentSelected={currentSelected}
        sortPrice={sortPrice}
      />
      <Product news={news} />
    </>
  );
}

export default Home;
