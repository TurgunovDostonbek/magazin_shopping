// style link..
import "./Brend.css";

import brendHuawei from "../../assets/img/Brends/image 14.png";
import brendSamsung from "../../assets/img/Brends/image 15.png";
import brendHonor from "../../assets/img/Brends/image 16.png";
import brendBeko from "../../assets/img/Brends/image 17.png";
import brendMi from "../../assets/img/Brends/image 18.png";
import brendLG from "../../assets/img/Brends/image 19.png";

function Brend() {
  return (
    <div className="brend">
      <div className="brend_container container">
        <p>Бренды</p>
        <div className="brend_container_cards">
          <div className="brend_container_card">
            <img src={brendHuawei} alt="Img" />
          </div>
          <div className="brend_container_card">
            <img src={brendSamsung} alt="Img" />
          </div>
          <div className="brend_container_card">
            <img src={brendHonor} alt="Img" />
          </div>
          <div className="brend_container_card">
            <img src={brendBeko} alt="Img" />
          </div>
          <div className="brend_container_card">
            <img src={brendMi} alt="Img" />
          </div>
          <div className="brend_container_card">
            <img src={brendLG} alt="Img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brend;
