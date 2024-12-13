// Style
import "./Blog.css";
import { Blogs } from "../../../data";

function Blog() {
  return (
    <div className="blog">
      <div className="blog_container container">
        <div className="blog_container_info">
          <h3>Блог</h3>
          <div className="blog_container_info_btn flex_div">
            <button>Статьи</button>
            <button>Видеообзоры</button>
            <button>Новости</button>
          </div>
        </div>

        <div className="blog_container_cards flex_div">
          {Blogs.map((item) => {
            return (
              <div key={item.id} className="blog_container_card">
                <img src={item.image} alt="Img" />
                <span>{item.data}</span>
                <p>{item.title}</p>
                <span>{item.info}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blog;
