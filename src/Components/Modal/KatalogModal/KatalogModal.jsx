// Style
import "./KatalogModal.css";

import { FaAngleRight } from "react-icons/fa";

function KatalogModal() {
  return (
    <div className="katalogmodal">
      <div className="katalogmodal_container container">
        <div className="katalogmodal_container_wrapper">
          <div className="katalogmodal_container_wrapper_left">
            <a href="#">Смартфоны и гаджеты</a>
            <a href="#">
              Телевизоры и видео <FaAngleRight />
            </a>
            <a href="#">
              Ноутбуки и компьютеры <FaAngleRight />
            </a>
            <a href="#">
              Техника для кухни <FaAngleRight />
            </a>
            <a href="#">
              Техника для дома <FaAngleRight />
            </a>
            <a href="#">
              Дом, дача, ремонт <FaAngleRight />
            </a>
            <a href="#">
              Аудио <FaAngleRight />
            </a>
            <a href="#">
              Красота и здоровье <FaAngleRight />
            </a>
            <a href="#">
              Игровая зона <FaAngleRight />
            </a>
            <a href="#">
              Спорт, развлечения, отдых <FaAngleRight />
            </a>
            <a href="#">
              Фото и видеокамеры <FaAngleRight />
            </a>
            <a href="#">
              Автотовары <FaAngleRight />
            </a>
          </div>
          <div className="katalogmodal_container_wrapper_right">
            <div className="katalogmodal_container_wrapper_card">
              <h2>Смартфоны, телефоны</h2>
              <a href="#">Смартфоны</a>
              <a href="#">Смартфоны Apple iPhone</a>
              <a href="#">Смартфоны Samsung</a>
              <a href="#">Смартфоны Xiaomi</a>
              <a href="#">Сотовые телефоны</a>
              <a href="#">Радиотелефоны DECT</a>
              <a href="#">Проводные телефоны</a>
              <a href="#">Чехлы для смартфонов</a>
              <a href="#">Защитные стекла</a>
              <a href="#">
                Портативные зарядные <br /> устройства
              </a>
              <a href="#">Показать все</a>
            </div>
            <div className="katalogmodal_container_wrapper_card">
              <h2>Все наушники</h2>
              <a href="#">Наушники</a>
              <a href="#">Наушники и гарнитуры</a>
              <a href="#">Наушники Bluetooth</a>
              <a href="#">Наушники накладные</a>
              <a href="#">Наушники полноразмерные</a>
              <a href="#">Спортивные наушники</a>
              <a href="#">Наушники с плеером</a>
              <a href="#">Наушники True wireless</a>
            </div>
            <div className="katalogmodal_container_wrapper_card">
              <h2>Аксессуары</h2>
              <a href="#">Кабели и переходники</a>
              <a href="#">Подставки и штативы для планшетов</a>
              <a href="#">Чехлы для смартфонов</a>
              <a href="#">Чехлы и клавиатуры для планшетов</a>
              <a href="#">Защитные стекла</a>
              <a href="#">Портативные зарядные устройства</a>
              <a href="#">Кабели для смартфонов</a>
              <a href="#">Сетевые зарядные устройства</a>
              <a href="#">Док-станции</a>
              <a href="#">Карты памяти</a>
              <a href="#">Показать все</a>
            </div>
            <div className="katalogmodal_container_wrapper_card">
              <h2>
                Планшеты и электронные <br /> книги
              </h2>
              <a href="#">Планшеты</a>
              <a href="#">Электронные книги</a>
              <a href="#">Планшеты детские для рисования</a>
              <a href="#">Защитные пленки для планшетов</a>
              <a href="#">Подставки и штативы</a>
              <a href="#">Чехлы и клавиатуры</a>
              <a href="#">Чехлы и клавиатуры</a>
            </div>
            <div className="katalogmodal_container_wrapper_card">
              <h2>Портативный звук</h2>
              <a href="#">Планшеты</a>
              <a href="#">Электронные книги</a>
              <a href="#">Планшеты детские для рисования</a>
              <a href="#">Защитные пленки для планшетов</a>
              <a href="#">Подставки и штативы</a>
              <a href="#">Чехлы и клавиатуры</a>
              <a href="#">Чехлы и клавиатуры</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KatalogModal;
