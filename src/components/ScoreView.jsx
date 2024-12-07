/* eslint-disable */
import React from "react";
import Image from "./Image";
import trophy from "/images/images/trophy.svg";
import donut from "/images/images/donut.svg";
import loser from "/images/images/loser.svg";
import winner from "/images/images/winner.svg";

const ScoreView = ({ score }) => {
  return (
    <div className="scoreview-container">
      {score === 10 && (
        <>
          <Image
            src={winner}
            alt="Winner image for the scoreboard"
            className="jump-in-distance"
          />
          <div>WOW, you get a perfect score!</div>
          <div>Your final score is {score}/10</div>
        </>
      )}
      {score >= 5 && score < 9 && (
        <>
          <Image
            src={trophy}
            alt="Trophy image for the scoreboard"
            className="jump-in-distance"
          />
          <div>Well done! Your final score is {score}/10</div>
        </>
      )}

      {score < 5 && score > 0 && (
        <>
          <Image
            src={donut}
            alt="Donut stop trying image"
            className="jump-in-distance"
          />
          <div>You will do better next time!</div>
          <div>Your final score is {score}/10</div>
        </>
      )}

      {score === 0 && (
        <>
          <Image
            src={loser}
            alt="Loser image for the scoreboard"
            className="jump-in-distance"
          />
          <div>Err, better luck next time!</div>
          <div>Your final score is {score}/10</div>
        </>
      )}
    </div>
  );
};

export default ScoreView;