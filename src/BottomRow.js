import React, { useState } from "react";

import "./App.css";

// const [downValue, setDownValue] = useState(0);
// const [toGoValue, setToGoValue] = useState(0);
// const [ballOnValue, setBallOnValue] = useState(0);

// const updateDownValue = e => {
//   setDownValue(downValue + 1);
// }

// const updateToGoValue = e => {
//   setToGoValue(toGoValue + 1);
// }

// const updateBallOnValue = e => {
//   setBallOnValue(ballOnValue + 1);
// }

// const updateQuarterValue = e => {
//   setQuarterValue(quarterValue + 1);
// }


const BottomRow = () => {

const [quarterValue, setQuarterValue] = useState(0);
// const [downValue, setDownValue] = useState(0);
// const [toGoValue, setToGoValue] = useState(0);
// const [ballOnValue, setBallOnValue] = useState(0);

// const updateDownValue = e => {
//   setDownValue(downValue + 1);
// }

// const updateToGoValue = e => {
//   setToGoValue(toGoValue + 1);
// }

// const updateBallOnValue = e => {
//   setBallOnValue(ballOnValue + 1);
// }

const updateQuarterValue = e => {
  setQuarterValue(quarterValue + 1);
}

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div> 
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">1</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterValue}</div>
      </div>
      {/* <div className="bottom__touchdown">
          <button onClick = {updateToGoValue} className="quarter__Button">To Go</button>
      </div>
      <div className="bottom__touchdown">
          <button onClick = {updateBallOnValue} className="quarter__Button">Ball On</button>
      </div>
      <div className="bottom__touchdown">
          <button onClick = {updateDownValue} className="quarter__Button">Downs</button>
      </div> */}
      <div className="bottom__touchdown">
          <button onClick = {updateQuarterValue} className="quarter__Button">Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
