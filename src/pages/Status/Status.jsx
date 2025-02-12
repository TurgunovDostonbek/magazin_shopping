import "./Status.css";
import { GoX } from "react-icons/go";
import { Link } from "react-router-dom";

function Status({ setStatus }) {
  return (
    <div className="status">
      <div className="status__container conatiner">
        <h2 className="status__title">Статус заказа</h2>
        <form className="status__form" action="">
          <input placeholder="Номер заказа" type="tel" />
          <input placeholder="Номер телефона" type="text" />
          <button className="status__form-btn" onClick={() => setStatus(false)}>
            Получить код
          </button>
        </form>
        <i onClick={() => setStatus(false)}>
          <GoX className="status__close icons" />
        </i>
      </div>
    </div>
  );
}

export default Status;
