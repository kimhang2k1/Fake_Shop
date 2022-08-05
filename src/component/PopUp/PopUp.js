import ItemPopUp from "./ItemPopUp/ItemPopUp";
import "./PopUp.css";

function PopUp({ triggle, closeModal }) {
  return triggle ? <ItemPopUp closeModal={closeModal} /> : null;
}

export default PopUp;
