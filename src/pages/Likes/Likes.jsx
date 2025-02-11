import "./Likes.css";

const Likes = () => {
  return (
    <div className="likes">
      <div className="likes__container container">
        <h2 className="likes__heading">Избранное</h2>
        <div className="likes__info">
          <h3 className="likes__info-title">
            В списке пока нет ни одного избранного товара
          </h3>
          <button className="likes__info-btn">Перейти в каталог</button>
        </div>
      </div>
    </div>
  );
};

export default Likes;
