import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./container/Home/Home";
import PageCart from "./container/PageCart/PageCart";
import PageProductDetail from "./container/PageDetailProduct/PageProductDetail";
function App() {
  const [news, setNews] = useState([]);
  const [cart, setCart] = useState([]);
  const [disableIncrease, setDisableIncrease] = useState(false);
  const [disableDecrease, setDisableDecrease] = useState(false);
  const [category, setCategory] = useState([]);
  const [categoriesId, setCategotiesId] = useState("electronics");
  const [sort, setSort] = useState("asc");

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

  // useEffect(() => {
  //   fetch(`https://fakestoreapi.com/products?sort=${sort}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setNews(json);
  //     });
  // }, [sort]);

  const sortPrice = (e) => {
    setSort(e.target.value);
    if (sort === "desc") {
      const products = news.sort((a, b) => a.price - b.price);
      setNews(products);
    } else if (sort === "asc") {
      const products = news.sort((a, b) => b.price - a.price);
      setNews(products);
    }
  };
  //load product
  const addToCart = (product, amount) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + amount }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: amount,
        },
      ]);
    }
    alert("Thêm giỏ hàng thành công!!!");
  };
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setNews(json);
      });
  }, []);

  const deleteCart = (el) => {
    let cartClone = [...cart];
    cartClone = cartClone.filter((cartItem) => cartItem.id !== el.id);
    setCart(cartClone);
  };

  const increase = (product) => {
    let itemCart = [...cart];
    let mapped = itemCart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + (item.quantity < 10 ? 1 : 0) }
        : { ...item }
    );
    if (product.quantity >= 10) {
      setDisableIncrease(true);
    } else {
      setDisableDecrease(false);
    }
    setCart(mapped);
  };
  const decrease = (product) => {
    let itemCart = [...cart];
    let mapped = itemCart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity - (item.quantity > 1 ? 1 : 0),
          }
        : { ...item }
    );

    if (product.quantity <= 1) {
      setDisableDecrease(true);
    } else {
      setDisableIncrease(false);
    }

    setCart(mapped);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              news={news}
              category={category}
              currentSelected={currentSelected}
              sortPrice={sortPrice}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<PageProductDetail news={news} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <PageCart
              cart={cart}
              deleteCart={deleteCart}
              increase={increase}
              decrease={decrease}
              disableIncrease={disableIncrease}
              disableDecrease={disableDecrease}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
