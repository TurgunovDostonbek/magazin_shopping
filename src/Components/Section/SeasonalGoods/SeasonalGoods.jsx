// Style
import "./SeasonalGoods.css";
import { CiStar } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { SlLike } from "react-icons/sl";
import { CiBellOn } from "react-icons/ci";
import { productSeasonal } from "../../../data";

function Seasonal() {
  return (
    <div className="seasonal">
      <div className="seasonal_container container">
        <div className="seasonal_container_info">
          <h2>Сезонные товары</h2>
          <div className="seasonal_container_info_btn flex_div">
            <button>Все</button>
            <button>Культиваторы</button>
            <button>Инструменты садовые</button>
            <button>Кусторезы, садовые ножницы</button>
            <button>Стеклоочистители</button>
            <button>Мойки</button>
          </div>
        </div>
        <div className="seasonal_container_cards">
          {productSeasonal.map((item) => {
            return (
              <div key={item.id} className="seasonal_container_card">
                <a href="#">Финальная цена</a>
                <img src={item.image} alt="Img" />
                <span>
                  <CiStar /> {item.rating}.0
                </span>
                <p>{item.name}</p>
                <small>{item.originalPrice + " " + item.currency}</small>
                <b>{item.price + " " + item.currency}</b>
                <button>В корзину</button>
                <div className="seasonal_container_card_icon">
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

export default Seasonal;
