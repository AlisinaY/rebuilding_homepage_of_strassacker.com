import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <>
      <div className="d-flex header-container">
        <div className="pos-relative header">
          <div className="header__video">
            <video autoPlay muted loop>
              <source
                src="https://www.strassacker.com/s3/1014-(1)(1)-1733399858.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="pos-absolute d-flex flex-align-center header__heading">
            <div className="d-flex header__items">
              <div className="d-flex flex-align-center header__item">
                <div className="header__sideline">
                  <div></div>
                </div>
                <div>
                  <h3 className="text-uppercase">Kunstgieserei Strassacker</h3>
                </div>
              </div>
              <div>
                <h1>Traditionelles Handwerk, moderne</h1>
              </div>
              <div>
                <h1>Fertigungstechnik</h1>
              </div>
            </div>
            <div className=" pos-absolute d-flex flex-align-center header__sideboxes">
              <div className="header__sidebox">
                <div>
                  <span className="text-uppercase">sakral</span>
                </div>
              </div>
              <div className="header__sidebox">
                <div>
                  <span className="text-uppercase">edition</span>
                </div>
              </div>
              <div className="header__sidebox">
                <div>
                  <span className="text-uppercase">manufaktur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
