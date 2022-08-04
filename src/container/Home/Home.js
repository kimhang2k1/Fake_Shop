import "./Home.css";

import Header from "../../component/Header/Header";
import FilterProduct from "../../component/Product/FilterProduct/FilterProduct";
import Product from "../../component/Product/Product";
import { useEffect, useState } from "react";

function Home() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState([]);
  const [categoriesId, setCategotiesId] = useState("");
  const [sort, setSort] = useState("asc");

  //load product

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setNews(json);
      });
  }, []);

  const sortPrice = (e) => {
    setSort(e.target.value);
  };

  // load category by ID
  const currentSelected = (e) => {
    setCategotiesId(e.target.value);
  };
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoriesId}`)
      .then((res) => res.json())
      .then((json) => {
        setNews(json);
      });
  }, [categoriesId]);

  //load category
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategory(json);
      });
  }, []);

  // sort price

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?sort=${sort}`)
      .then((res) => res.json())
      .then((json) => {
        setNews(json);
      });
  }, [sort]);

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
