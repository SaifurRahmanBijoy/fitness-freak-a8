import React from "react";
import "./QnA.css";

const QnA = () => {
  return (
    <div>
      <div className="qna-container">
        <h2 className="question">How does React work?</h2>
        <p className="answer">
          It is a component-based, open-source front-end library that is
          exclusively responsible for the application's view layer. It creates
          basic views for each state in the project, and when the data changes,
          React updates and renders the appropriate component quickly. The
          building block of React is React elements, then components, followed
          by state, and properties. React has its own virtual dom. Which makes
          react more efficient than its peers.
        </p>
      </div>
      <div className="qna-container">
        <h2 className="question">
          What are the difference between props and state?
        </h2>
        <p className="answer">
          Props are known as properties it can be used to pass data from one
          component to another. Props cannot be modified, read-only, and
          Immutable. The state represents parts of an Application that can
          change. Each component can have its State. The state is Mutable and It
          is local to the component only.
        </p>
      </div>
      <div className="qna-container">
        <h2 className="question">
          Why is useEffect used besides loading data?
        </h2>
        <p className="answer">
          The useEffect Hook allows you to perform side effects in your
          components. Some examples of side effects are: fetching data, directly
          updating the DOM, and timers. Basically useEffect does the work which
          we want React to do after it loads once given the appropriate
          conditions. Reading from local storage, Registering and de-registering
          event listeners etc are its main uses.
        </p>
      </div>
    </div>
  );
};

export default QnA;
