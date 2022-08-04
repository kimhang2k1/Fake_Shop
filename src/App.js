import { Route, Routes } from "react-router-dom";
import Home from "./container/Home/Home";
import PageCart from "./container/PageCart/PageCart";
import PageProductDetail from "./container/PageDetailProduct/PageProductDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<PageProductDetail />} />
        <Route path="/cart" element={<PageCart />} />
      </Routes>
    </>
  );
}

export default App;
