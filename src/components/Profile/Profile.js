import React from 'react';
import { useState } from 'react';
import BreakBtn from '../BreakBtn/BreakBtn';
import image from './img.jpg';
import { addToLocalStorage, getStoredObj } from '../Utilities/dbController';
import { useEffect } from 'react';
import './Profile.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = ({ exerciseTime }) => {
  const [breakTime, setBreakTime] = useState(0);
  const breakTimeArray = [10, 20, 30, 40, 50];

  const notify = () =>
    toast.success('Congratulations!! You have completed your activities.');

  const handleBreakBtnClick = selectedBreakTime => {
    setBreakTime(selectedBreakTime);
    addToLocalStorage(selectedBreakTime);
  };

  useEffect(() => {
    const breakTimeObj = getStoredObj();
    // console.log(breakTimeObj);

    setBreakTime(breakTimeObj);
  }, [breakTime]);

  return (
    <div className="bg-blue-300 px-4 pb-10 rounded-xl shadow-2xl ">
      <div>
        <div className="flex space-x-5 mt-10 pt-10">
          <img className="width rounded-full" src={image} alt="" />
          <div className="text-left">
            <h3 className="text-lg font-semibold">Saifur Rahman</h3>
            <p>
              <small>Chittagong, Bangladesh</small>
            </p>
          </div>
        </div>

        {/* info */}
        <div className=" flex space-x-10 mt-8 py-2 px-4 bg-slate-200 rounded-2xl">
          <p>
            <span className="font-bold">76 KG</span> <br />
            weight
          </p>

          <p>
            <span className="font-bold"> 5'10"</span> <br />
            height
          </p>
          <p>
            <span className="font-bold">22 years</span> <br /> age
          </p>
        </div>

        {/* break */}
        <div className="mt-8">
          <h4 className="text-left text-lg font-medium mb-1 text-zinc-600">
            Add a break
          </h4>
          <div className="flex space-x-3 bg-slate-200 rounded-2xl p-2">
            {breakTimeArray.map(time => (
              <BreakBtn
                key={time}
                time={time}
                handleBreakBtnClick={handleBreakBtnClick}
              />
            ))}
          </div>
        </div>

        {/* exercise details */}
        <div className="mt-8 text-left">
          <h4 className="mb-2">Exercise Details</h4>
          <div className="flex justify-between bg-slate-200 p-2 rounded-xl">
            <h4>Exercise time</h4>
            <p>{exerciseTime} mins</p>
          </div>
          <div className="flex justify-between bg-slate-200 p-2 rounded-xl mt-5">
            <h4>Break time</h4>
            <p>{breakTime} mins</p>
          </div>
        </div>

        <button
          onClick={notify}
          className="bg-blue-700 py-3 w-full mt-5 rounded-md text-white font-bold"
        >
          Activity Completed
        </button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default Profile;
