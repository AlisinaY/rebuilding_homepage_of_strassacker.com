import React from "react";

import "./StrassackerMenu.css";

const Button = ({ text }) => {
  const [state, setState] = React.useState(false);
  const handleOnMouseOver = () => {
    setState(true);
  };
  const handleOnMouseOut = () => {
    setState(false);
  };
  return (
    <>
      <div
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
        className={`d-flex flex-align-center btn ${state ? "btn--hovered" : ""}
        `}>
        <div className="btn__text">
          <h5 className="text-uppercase btn__content">{text}</h5>
        </div>
        <div
          className={`btn__sideline ${
            state ? "btn__sideline--hovered" : ""
          }`}></div>
      </div>
    </>
  );
};

export { Button };
