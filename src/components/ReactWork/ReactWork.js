import React from 'react';

const ReactWork = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">How does React work?</h1>
      <p>
        It is a component-based, open-source front-end library that is
        exclusively responsible for the application's view layer. It creates
        basic views for each state in the project, and when the data changes,
        React updates and renders the appropriate component quickly. The
        building block of React is React elements, then components, followed by
        state, and properties. React has its own virtual dom. Which makes react
        more efficient than its peers.
      </p>
    </div>
  );
};

export default ReactWork;
