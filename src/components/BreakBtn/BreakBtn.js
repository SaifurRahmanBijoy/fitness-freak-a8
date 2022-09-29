import React from 'react';

const BreakBtn = ({ time, handleBreakBtnClick }) => {
  return (
    <div>
      <button
        onClick={() => handleBreakBtnClick(time)}
        className="p-2 rounded-lg text-white bg-purple-600"
      >
        {time}
      </button>
    </div>
  );
};

export default BreakBtn;
