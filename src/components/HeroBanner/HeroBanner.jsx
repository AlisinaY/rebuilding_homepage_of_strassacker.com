import React, { useState } from 'react';

import './HeroBanner.css';

const HeroBanner = () => {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseOver() {
    setIsHovered(true);
  }

  function handleMouseOut() {
    setIsHovered(false);
  }

  return (
    <div className="pos-relative herobanner">
      <div className="d-flex flex-align-center herobanner__items"></div>
      <div className="pos-absolute d-flex flex-align-center herobanner__item">
        <div className="herobanner__title">
          <h1 className="text-uppercase">vision form geben</h1>
        </div>
        <div className="d-flex flex-align-center herobanner__text">
          <div>
            <p>
              Wir realisieren Auftragsarbeiten international renommierter
              Künstler, Sonderanfertigungen
            </p>
          </div>
          <div>
            <p>
              im Bereich Design, Kunst und Architektur sowie internationale
              Großprojekte. Und das in
            </p>
          </div>
          <div>
            <p> vierter Generation! </p>
          </div>
          <p></p>
        </div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="d-flex flex-align-center herobanner__btn"
        >
          <div className="herobanner__">
            <h3 className="text-uppercase">Mehr</h3>
          </div>
          <div style={{ width: '40px' }} className="herobanner__">
            <div
              className={
                isHovered
                  ? 'herobanner__sideline--hovered '
                  : 'herobanner__sideline'
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
