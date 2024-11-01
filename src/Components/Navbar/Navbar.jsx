import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import navLogo from "../../assets/img/Лого.png";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container navbar_container">
        <div className="navbar_logo flex_div">
          <a href="#">
            <img src={navLogo} alt="" />
          </a>
        </div>

        <div className="navbar_search">
          <form className="flex_div">
            <label>
              <input type="text" />
            </label>
            <button>
              <CiSearch className="icons" />
            </button>
          </form>
        </div>
        <div className="navbar_icons">
          <span>
            <CiUser />
            Войти
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
