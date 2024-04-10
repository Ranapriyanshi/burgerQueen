import React from "react";
import burger1 from "../assets/burger1.jpeg";
import burger2 from "../assets/burger2.png";
import burger3 from "../assets/burger3.jpg"; 
const Main = () => {
  return (
    <div className="mainSec">
      <div className="mainl">
        <div className="partOne">
          <h1>
            <button className="styleBtn" id="newBtn">
              NEW
            </button>
            <br />
            THE DOUBLE <br /> <span> DECKER</span>
            <p className="chillies">🌶️🌶️🌶️ Spicy</p>
          </h1>
          <p>
            Double juicy beef patties, melted pepper jack cheese, and a fiery
            special sauce await between toasted sesame buns. Topped with crisp
            lettuce, tomatoes, and pickles for a refreshing balance. Dive into
            this spicy sensation today!
          </p>
          <div className="pricingSection">
            <h3>INGRIDIENTS</h3>
            <h2>🥑🥒🥬🧅🧄🥩🥓</h2>
          </div>
          <div className="orderSection">
            <button className="styleBtn" id="orderBtn">
              {" "}
              ORDER NOW
            </button>
            <h2>$15.36</h2>
          </div>
          <div>
            <h1><img src={burger3} alt="" /></h1>
          </div>
        </div>
        <div className="burgerImage">
          <img src={burger1} alt="" />
        </div>
      </div>
      <div className="mainr">
        <div className="tags">
          <div>
            <h4>Calories</h4>
            <h5>kCal</h5>
            <h3>1200</h3>
          </div>
          <div>
            <h4>Fat</h4>
            <h5>kCal</h5>
            <h3>1200</h3>
          </div>
          <div>
            <h4>Protiens</h4>
            <h5>kCal</h5>
            <h3>1200</h3>
          </div>
        </div>
        <div className="blurBurg">
          <img src={burger2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
