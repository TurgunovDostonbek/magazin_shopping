import Footer from "../Components/Footer/Footer";
import Brend from "../Components/Section/Brends/Brend";
import Department from "../Components/Department/Department";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import PopularCategory from "../Components/Section/PopularCategory/PopularCategory";
import Blog from "../Components/Section/Blog/Blog";
import Service from "../Components/Section/Servis/Service";
import Seasonal from "../Components/Section/SeasonalGoods/SeasonalGoods";
import Bestseller from "../Components/Section/Bestsellers/Bestseller";

const Root = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Department />
      <Hero />
      <PopularCategory />
      <Bestseller />
      <Seasonal />
      <Service />
      <Brend />
      <Blog />
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
