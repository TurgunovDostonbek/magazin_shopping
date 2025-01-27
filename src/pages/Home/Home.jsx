import Hero from "../../Components/Hero/Hero";
import Bestseller from "../../Components/Section/Bestsellers/Bestseller";
import Blog from "../../Components/Section/Blog/Blog";
import Brend from "../../Components/Section/Brends/Brend";
import PopulalarCategory from "../../Components/Section/PopularCategory/PopularCategory";
import SeasonGoods from "../../Components/Section/SeasonalGoods/SeasonalGoods";
import Servis from "../../Components/Section/Servis/Service";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopulalarCategory />

      <Bestseller />
      <SeasonGoods />

      <Servis />
      <Brend />
      <Blog />
    </div>
  );
};

export default Home;
