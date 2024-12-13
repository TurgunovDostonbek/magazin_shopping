// Style
import "./Hero.css";
import heroImg from "../../assets/img/hero/hero.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero_container container">
        <div className="hero_container_image">
          <img src={heroImg} alt="img" />
        </div>
        <div className="hero_container_info flex_colum">
          <p>Черная пятница</p>
          <span>Большие скидки </span>
          <b>-50%</b>
          <button className="flex_div">В каталог</button>
          <small>+7 (812) 834-84-88</small>
        </div>
      </div>
    </div>
  );
}

export default Hero;
