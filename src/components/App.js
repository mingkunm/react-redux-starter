import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";

// Redux action
import { dummyAction } from "../actions/action";

function App({ dummyAction }) {
  const reduxState = useSelector((state) => state.dummyReducer);

  useEffect(() => {
    dummyAction();
  }, [dummyAction]);

  return (
    <div className="App">
      <h1>React Redux starter demo</h1>
      <h1>{reduxState[0]}</h1>
    </div>
  );
}

export default connect(null, { dummyAction })(App);
