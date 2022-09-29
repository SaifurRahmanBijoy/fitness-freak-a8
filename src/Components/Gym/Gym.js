import React, { useEffect, useState } from "react";
import Calc from "../Calc/Calc";
import Sport from "../Sport/Sport";
import "./Gym.css";

const Gym = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    // console.log("Products load before fetch");
    fetch("sports.json")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);

  return (
    <div>
      <div className="gym-container">
        <div>
            <h2 className="title-text">Good Health and Good Sense</h2>
          <div className="sports-container">
            {sports.map((sport) => (
              <Sport key={sport.id} sport={sport}></Sport>
            ))}
          </div>
        </div>
        <div className="calc-container">
          <Calc></Calc>
        </div>
      </div>
    </div>
  );
};

export default Gym;
