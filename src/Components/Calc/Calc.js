import React from "react";
import "./Calc.css";
import mine from "../../images/mine.png";

const Calc = () => {
  return (
    <div>
      <div className="my-infos">
        <div className="my-info">
          <img src={mine} alt="" />
          <p>
            Saifur Rahman <br />
            Chittagong
          </p>
        </div>
        <p className="my-info">Height: 5'11"</p>
        <p className="my-info">Weight: 76Kg</p>
      </div>
      {/* ---> */}
      <div className="calc">
        <div className="break">
          <h3>Add a break</h3>
          <div className="break-btn">
            <button>10</button>
            <button>20</button>
            <button>30</button>
            <button>40</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
