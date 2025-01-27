import Header from "../Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Likes from "../pages/Likes/Likes";
import Footer from "../Components/Footer/Footer";
const Root = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/likes" element={<Likes />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Root;
