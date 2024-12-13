// style link
import "./Header.css";
import tel from "../../assets/img/tel.png";
import location from "../../assets/img/location.png";

function Header() {
  return (
    <header className="header">
      <div className="header_container container">
        <div className="header_container_logo">
          <a href="#">
            <h1>
              Mix <br />
              Market.
            </h1>
          </a>
        </div>

        <div className="header_container_links  ">
          <a href="#">О нас</a>
          <a href="#">Магазины</a>
          <a href="#">Оплата и доставка</a>
          <a href="#">Статус заказа</a>
          <a href="#">Возврат</a>
          <a href="#">Контакты</a>
        </div>

        <div className="header_container_addres">
          <div className="header_location">
            <a href="#" className="flex_div">
              <img src={location} alt="location" />
              <span>Москва</span>
            </a>
          </div>

          <div className="header_telephone">
            <a href="#" className="flex_div">
              <img src={tel} alt="tel" />
              <span>+7 (812) 834-84-88</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
