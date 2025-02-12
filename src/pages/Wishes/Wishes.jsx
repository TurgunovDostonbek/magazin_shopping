import "./Wishes.css";

function Wishes() {
  return (
    <div className="wishes">
      <div className="wishes__container container">
        <h2 className="wishes__heading">Корзина</h2>
        <div className="wishes__info">
          <h3 className="wishes__info-title">Ваша корзина пуста.</h3>
          <button className="wishes__info-btn">Перейти в каталог</button>
        </div>
      </div>
    </div>
  );
}

export default Wishes;
