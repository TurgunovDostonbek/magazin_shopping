import "./Navbar.css";
import navLike from "../../assets/img/like.png";
import navBasket from "../../assets/img/basket.png";
import navUser from "../../assets/img/user.png";
import KatalogModal from "../Modal/KatalogModal/KatalogModal";
import { useState } from "react";

const Navbar = () => {
  const [katalogModal, setKatalogModal] = useState(false);
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
            <a href="#" className="flex_colum">
              <img src={navLike} alt="Like" />
              Избранное
            </a>
          </div>

          <div className="navbar_btn_basket">
            <a href="#" className="flex_colum">
              <img src={navBasket} alt="Basket" />
              Корзина
            </a>
          </div>

          <div className="navbar_btn_user">
            <a href="#" className="flex_colum">
              <img src={navUser} alt="User" />
              Войти
            </a>
          </div>
        </div>
        {katalogModal && <KatalogModal />}
      </div>
    </nav>
  );
};

export default Navbar;
