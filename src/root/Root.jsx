// import Footer from "../Components/Footer/Footer";
// import Brend from "../Components/Brends/Brend";
import Department from "../Components/Department/Department";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import PopularCategory from "../Components/Section/PopularCategory/PopularCategory";

const Root = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Department />
      <PopularCategory />
      {/* <Brend /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
