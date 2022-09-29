import React from 'react';

const BreakBtn = ({ time, handleBreakBtnClick }) => {
  return (
    <div>
      <button
        onClick={() => handleBreakBtnClick(time)}
        className="py-2 px-3 rounded-xl text-white bg-blue-600"
      >
        {time}
      </button>
    </div>
  );
};

export default BreakBtn;
