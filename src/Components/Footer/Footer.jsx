//style link.
import "./Footer.css";
// photo
import footerTel from "../../assets/img/tel.png";
import footerSms from "../../assets/img/sms.png";
import footerYoutube from "../../assets/img/messeg/Frame 1908.png";
import footerInstagrm from "../../assets/img/messeg/Frame 1909.png";
import footerFacebook from "../../assets/img/messeg/Frame 1910.png";
import footerWk from "../../assets/img/messeg/Frame 1911.png";
import footerTelegram from "../../assets/img/messeg/Frame 1912.png";
import footerOk from "../../assets/img/messeg/Frame 1913.png";
import footerVisa from "../../assets/img/Frame 1914.png";
import footerVisa2 from "../../assets/img/Frame 1915.png";
import footerVisa3 from "../../assets/img/Frame 1916.png";
import footerVisa4 from "../../assets/img/Frame 1917.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <div className="footer_container_info">
          <h4>Компания</h4>
          <a href="#">О нас</a>
          <a href="#">Магазины</a>
          <a href="#">Блог</a>
          <a href="#">Вакансии</a>
          <a href="#">Контакты</a>
          <a href="#">Партнерская программа</a>
        </div>

        <div className="footer_container_info">
          <h4>Покупателям</h4>
          <a href="#">Как сделать заказ</a>
          <a href="#">Оплата и доставка</a>
          <a href="#">Статус заказа</a>
          <a href="#">Возврат</a>
          <a href="#">Юридическая информация</a>
          <a href="#">Политика персональных данных</a>
        </div>

        <div className="footer_container_info">
          <h4>На связи 24/7</h4>
          <div className="footer_container_info_addres">
            <a href="#" className="flex_div">
              <img src={footerTel} alt="Img" />
              +7 (812) 834-84-88
            </a>
          </div>
          <div className="footer_container_info_addres">
            <a href="#" className="flex_div">
              <img src={footerSms} alt="Img" />
              example@mail.ru
            </a>
          </div>
        </div>

        <div className="footer_container_info">
          <h4>Подписаться на новости и акции</h4>
          <form>
            <input placeholder="E-mail" type="email" />
            <button>Подписаться</button>
          </form>
          <p>
            Нажимая «Подписаться», я даю согласие на получение <br /> рассылки и
            обработку <i>персональных данных</i>
          </p>
          <b>Мы в социальных сетях</b>
          <div className="footer_container_info_messeges">
            <img src={footerYoutube} alt="Img" />
            <img src={footerInstagrm} alt="Img" />
            <img src={footerFacebook} alt="Img" />
            <img src={footerWk} alt="Img" />
            <img src={footerTelegram} alt="Img" />
            <img src={footerOk} alt="Img" />
          </div>
          <b>Мы принимаем к оплате</b>
          <div className="footer_container_info_cards">
            <img src={footerVisa} alt="Img" />
            <img src={footerVisa2} alt="Img" />
            <img src={footerVisa3} alt="Img" />
            <img src={footerVisa4} alt="Img" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
