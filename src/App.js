import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PopUp from "./component/PopUp/PopUp";
import Home from "./container/Home/Home";
import PageCart from "./container/PageCart/PageCart";
import PageProductDetail from "./container/PageDetailProduct/PageProductDetail";
function App() {
  const [show, setShow] = useState(false);
  const [news, setNews] = useState([]);
  const [cart, setCart] = useState([]);
  const [disableIncrease, setDisableIncrease] = useState(false);
  const [disableDecrease, setDisableDecrease] = useState(false);
  const [category, setCategory] = useState([]);
  const [categoriesId, setCategotiesId] = useState("");
  const [sort, setSort] = useState("asc");

  // load category by ID
  const currentSelected = (e) => {
    setCategotiesId(e.target.value);
  };
  const getProductById = () => {
    if (!categoriesId) {
      return news;
    }
    return news.filter((f) => f.category === categoriesId);
  };

  //load category
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategory(json);
      });
  }, []);

  // sort by Price
  const sortPrice = (e) => {
    setSort(e.target.value);
    if (sort === "desc") {
      const products = news.sort((a, b) => a.price - b.price);
      setNews(products);
    } else if (sort === "asc") {
      const products = news.sort((a, b) => b.price - a.price);
      setNews(products);
    }
    // const product =
    //   sort === ""
    //     ? news
    //     : sort === "asc"
    //     ? news.sort((a, b) => a.price - b.price)
    //     : news.sort((a, b) => b.price - a.price);

    // setNews(product);
  };
  // add to cart
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
    setShow(true);
  };

  // load all products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setNews(json);
      });
  }, []);

  // delete cart
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

  const closeModal = () => {
    setShow(false);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              category={category}
              currentSelected={currentSelected}
              sortPrice={sortPrice}
              news={news}
              getProductById={getProductById}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <PageProductDetail
              news={news}
              addToCart={addToCart}
              show={show}
              closeModal={closeModal}
            />
          }
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
        <Route path="/popup" element={<PopUp />} />
      </Routes>
    </>
  );
}

export default App;
