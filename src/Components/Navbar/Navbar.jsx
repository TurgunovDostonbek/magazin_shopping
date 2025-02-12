import "./Navbar.css";
import navLike from "../../assets/img/like.png";
import navBasket from "../../assets/img/basket.png";
import navUser from "../../assets/img/user.png";
import KatalogModal from "../Modal/KatalogModal/KatalogModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../Modal/LoginModal/LoginModal";

const Navbar = () => {
  const [katalogModal, setKatalogModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar_container container">
        <div className="navbar_katalog">
          {!katalogModal && (
            <button
              onClick={() => {
                setKatalogModal(true);
              }}
            >
              Каталог
            </button>
          )}
          {katalogModal && (
            <button
              onClick={() => {
                setKatalogModal(false);
              }}
            >
              Каталог
            </button>
          )}
        </div>

        <div className="navbar_search">
          <div className="navbar_search_input">
            <form action="">
              <input placeholder="Поиск товара" type="text" />
            </form>
          </div>
        </div>

        <div className="navbar_btn">
          <div className="navbar_btn_like ">
            <Link className="flex_colum" to={"likes"}>
              <img src={navLike} alt="Like" />
              Избранное
            </Link>
          </div>

          <div className="navbar_btn_basket">
            <Link className="flex_colum" to={"wishes"}>
              <img src={navBasket} alt="Basket" />
              Корзина
            </Link>
          </div>

          <div
            onClick={() => {
              setLoginModal(true);
            }}
            className="navbar_btn_user"
          >
            <a className="flex_colum" href="#">
              <img src={navUser} alt="User" />
              Войти
            </a>
          </div>
        </div>
        {katalogModal && <KatalogModal />}
      </div>
      {loginModal && <LoginModal setLoginModal={setLoginModal} />}
    </nav>
  );
};

export default Navbar;
