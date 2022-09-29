import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';

const Dashboard = () => {
  const [sports, setSports] = useState([]);
  const [exerciseTime, setExerciseTime] = useState(0);

  useEffect(() => {
    fetch('sports.json')
      .then(res => res.json())
      .then(data => setSports(data));
  }, []);

  const handleBtnClick = (selectedSport, flag) => {
    setExerciseTime(exerciseTime + selectedSport.required_time);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <section className="md:w-9/12">
        <div className="w-10/12 md:w-8/12 mx-auto mb-10">
          <Navigation />
          <h3 className="text-left text-lg font-semibold text-zinc-600">
            Select Today's Exercises
          </h3>
        </div>

        {/* cards */}
        <div className="w-10/12 md:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {sports.map(sport => (
            <Card
              key={sport.id}
              sport={sport}
              handleBtnClick={handleBtnClick}
            />
          ))}
        </div>
      </section>

      <section className="w-10/12 mx-auto md:w-3/12 md:flex self-center ">
        <Profile exerciseTime={exerciseTime} />
      </section>
    </div>
  );
};

export default Dashboard;
