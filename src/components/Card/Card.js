import React from 'react';

const Card = ({ sport, handleBtnClick, msg }) => {
  // const [btnMessage, setBtnMessage] = useState('');
  const { img, name, required_time } = sport;

  return (
    <div className="shadow-2xl bg-blue-200 p-2 rounded parent-of-btn">
      <div>
        <div className="p-5">
          <img className="hover:scale-125 duration-200" src={img} alt="" />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-semibold">{name}</h4>
          <p>
            <small>Time required: {required_time} mins</small>
          </p>
          <button
            onClick={() => handleBtnClick(sport, true)}
            className="rounded-xl w-full bg-zinc-700 py-2 px-5 text-white btn"
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
