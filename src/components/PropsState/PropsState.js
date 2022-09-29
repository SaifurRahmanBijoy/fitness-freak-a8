import React from 'react';

const PropsState = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">
        What are the difference between props and state?
      </h1>
      <p>
        Props are known as properties it can be used to pass data from one
        component to another. Props cannot be modified, read-only, and
        Immutable. The state represents parts of an Application that can change.
        Each component can have its State. The state is Mutable and It is local
        to the component only.
      </p>
    </div>
  );
};

export default PropsState;
