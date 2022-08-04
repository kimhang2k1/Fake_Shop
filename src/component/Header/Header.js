import Cart from "./Cart/Cart";
import Logo from "./Logo/Logo";

function Header() {
  return (
    <div className="header">
      <div className="header-bar">
        <Logo />
        <Cart />
      </div>
    </div>
  );
}
export default Header;
