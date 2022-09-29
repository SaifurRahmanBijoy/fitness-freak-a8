import React from 'react';

const UseEffectUses = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">
        Why is useEffect used besides loading data?
      </h1>
      <p>
        The useEffect Hook allows you to perform side effects in your
        components. Some examples of side effects are: fetching data, directly
        updating the DOM, and timers. Basically useEffect does the work which we
        want React to do after it loads once given the appropriate conditions.
        Reading from local storage, Registering and deregistering event
        listeners etc are its main uses.
      </p>
    </div>
  );
};

export default UseEffectUses;
