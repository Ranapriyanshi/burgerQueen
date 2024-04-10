import React from "react";
import burger1 from "../assets/burger1.jpeg";
import burger2 from "../assets/burger2.png";

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
          </h1>
          <p className="chillies">🌶️🌶️🌶️ Spicy</p>
          <p>
            Double juicy beef patties, melted pepper jack cheese, and a fiery
            special sauce await between toasted sesame buns. Topped with crisp
            lettuce, tomatoes, and pickles for a refreshing balance. Dive into
            this spicy sensation today!
          </p>
          <div>
            <h2>INGRIDIENTS</h2>
            <h2>🥑🥒🥬🧅🧄🥩🥓</h2>
          </div>
        </div>
        <div className="burgerImage">
          <img src={burger1} alt="" />
        </div>
      </div>
      <div className="mainr">
        <img src={burger2} alt="" />
      </div>
    </div>
  );
};

export default Main;
