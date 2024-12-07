// style..
import "./PopularCategory.css";
import { popularCategories } from "../../../data";

function PopularCategory() {
  console.log(popularCategories);

  return (
    <div className="popular_category ">
      <div className="popular_category_container container">
        <h2>Популярные категории</h2>
        <div className="popular_category_cards">
          {popularCategories.map((item) => {
            return (
              <div key={item.id} className="popular_category_card">
                <img src={item.image} alt="img" />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PopularCategory;
