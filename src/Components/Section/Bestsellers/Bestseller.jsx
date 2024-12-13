// style
import "./Bestseller.css";

import { CiStar } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { SlLike } from "react-icons/sl";
import { CiBellOn } from "react-icons/ci";
import { bestSellers } from "../../../data";

function Bestseller() {
  return (
    <div className="bestseller">
      <div className="bestseller_container container">
        <div className="bestseller_container_info">
          <h2>Сервисы</h2>
          <div className="bestseller_container_info_btn flex_div">
            <button>Все</button>
            <button>Для компьютеров</button>
            <button>Для телевизоров</button>
            <button>Для смартфонов/планшетов</button>
            <button>Установка техники</button>
          </div>
        </div>
        <div className="bestseller_container_cards">
          {bestSellers.map((item) => {
            return (
              <div key={item.id} className="bestseller_container_card">
                <div className="bestseller_container_card_discount flex_div">
                  <a href="#">{item.discount}</a>
                  <a href="#">Товар из рекламы</a>
                </div>
                <img src={item.image} alt="Img" />
                <span>
                  <CiStar /> {item.rating}.0
                </span>
                <p>{item.name}</p>
                <small>{item.originalPrice + " " + item.currency}</small>
                <b>{item.price + " " + item.currency}</b>
                <button>В корзину</button>
                <div className="bestseller_container_card_icon">
                  <SlLike className="icons" />
                  <FiBarChart2 className="icons" />
                  <CiBellOn style={{ fontSize: "35px" }} className="icons" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Bestseller;
