import Footer from "../Components/Footer/Footer";
import Brend from "../Components/Section/Brends/Brend";
import Department from "../Components/Department/Department";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import PopularCategory from "../Components/Section/PopularCategory/PopularCategory";
import Blog from "../Components/Section/Blog/Blog";

const Root = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Department />
      <Hero />
      <PopularCategory />
      <Brend />
      <Blog />
      <Footer />
    </div>
  );
};

export default Root;
