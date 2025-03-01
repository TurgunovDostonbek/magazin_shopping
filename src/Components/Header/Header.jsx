// style link
import "./Header.css";
import tel from "../../assets/img/tel.png";
import location from "../../assets/img/location.png";
import Status from "../../pages/Status/Status";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [status, setStatus] = useState(false);
  return (
    <header className="header">
      <div className="header_container container">
        <div className="header_container_logo">
          <Link to={"/"}>
            <h1>
              Mix <br />
              Market.
            </h1>
          </Link>
        </div>

        <div className="header_container_links ">
          <a href="#">О нас</a>
          <a href="#">Магазины</a>
          <a href="#">Оплата и доставка</a>
          <a onClick={() => setStatus(true)} href="#">
            Статус заказа
          </a>
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
      {status && <Status setStatus={setStatus} />}
    </header>
  );
}

export default Header;
