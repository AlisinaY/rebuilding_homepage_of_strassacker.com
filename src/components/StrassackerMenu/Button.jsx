import React from 'react';

import './StrassackerMenu.css';

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
        className={
          state
            ? 'd-flex flex-align-center btn--hovered'
            : 'd-flex flex-align-center btn'
        }
      >
        <div className="btn__text">
          <h5
            className={
              state
                ? 'btn__content--hovered text-uppercase'
                : 'text-uppercase btn__content'
            }
          >
            {text}
          </h5>
        </div>
        <div
          className={state ? 'btn__sideline--hovered' : 'btn__sideline'}
        ></div>
      </div>
    </>
  );
};

export { Button };
