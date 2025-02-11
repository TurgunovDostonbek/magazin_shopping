import "./LoginModal.css";
import { GoX } from "react-icons/go";

function LoginModal({ setLoginModal }) {
  return (
    <div className="login-modal">
      <div className="login-modal__container conatiner">
        <h2 className="login-modal__title">Вход или регистрация</h2>
        <form className="login-modal__form" action="">
          <label className="login-modal__form-title flex_colum">
            Введите номер телефона. Мы отправим вам код в СМС.
            <input type="number" />
          </label>
          <button
            className="login-modal__form-btn"
            onClick={() => setLoginModal(false)}
          >
            Получить код
          </button>
        </form>
        <i onClick={() => setLoginModal(false)}>
          <GoX className="login-modal__close icons" />
        </i>
      </div>
    </div>
  );
}

export default LoginModal;
