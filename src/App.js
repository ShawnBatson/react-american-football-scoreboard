//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [scoreLion, setScoreLion] = useState(0);
  const [scoreTiger, setScoreTiger] = useState(0);

  const updateHomeTouch = e => {
    setScoreLion(scoreLion + 7);
  }

  const updateAwayTouch = e => {
    setScoreTiger(scoreTiger + 7);
  }

  const updateHomeField = e => {
    setScoreLion(scoreLion + 3);
  }

  const updateAwayField = e => {
    setScoreTiger(scoreTiger +3)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score"><span>{scoreLion}</span></div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score"><span>{scoreTiger}</span></div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {updateHomeTouch} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {updateHomeField}  className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {updateAwayTouch}  className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {updateAwayField}  className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        {/* <div className="homeButtons__touchdown">
          <button onClick = {updateQuarterValue} className="quarter__Button">Quarter</button>
        </div> */}
      </section>
    </div>
  );
}

export default App;
