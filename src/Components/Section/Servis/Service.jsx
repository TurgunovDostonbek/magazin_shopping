// Style
import "./Service.css";
import { CiStar } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { SlLike } from "react-icons/sl";
import { CiBellOn } from "react-icons/ci";
import { services } from "../../../data";

function Service() {
  return (
    <div className="service">
      <div className="service_container container">
        <div className="service_container_info">
          <h2>Сервисы</h2>
          <div className="service_container_info_btn flex_div">
            <button>Все</button>
            <button>Для компьютеров</button>
            <button>Для телевизоров</button>
            <button>Для смартфонов/планшетов</button>
            <button>Установка техники</button>
          </div>
        </div>
        <div className="service_container_cards">
          {services.map((item) => {
            return (
              <div key={item.id} className="service_container_card">
                <img src={item.image} alt="Img" />
                <span>
                  <CiStar /> {item.rating}.0
                </span>
                <p>{item.name}</p>
                <small>{item.originalPrice + " " + item.currency}</small>
                <b>{item.price + " " + item.currency}</b>
                <button>В корзину</button>
                <div className="service_container_card_icon">
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

export default Service;
