import React from "react";
import "./Sport.css";

const Sport = (props) => {
  const { name, img, required_time } = props.sport;
  return (
    <div>
      <div className="sport">
        <img src={img} alt="" />
        <div className="sport-details">
          <p className="sport-name">{name}</p>
          <p>Required Time: {required_time} min</p>
        </div>
        <button className="btn-calc">
          <p>Add to list</p>
        </button>
      </div>
    </div>
  );
};

export default Sport;
