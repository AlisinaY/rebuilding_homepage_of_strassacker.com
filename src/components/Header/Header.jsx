import "./Header.css";

const Header = () => {
  return (
    <div className="d-flex header-container">
      <div className="pos-relative header">
        <div className="header__video">
          <div>
            <video
              autoPlay
              muted
              loop
              type="video/mp4"
              src="https://www.strassacker.com/s3/1014-(1)(1)-1733399858.mp4"
            />
          </div>
        </div>
        <div className="d-flex flex-align-center flex-row pos-absolute header__title">
          <div className="header__items">
            <div className="d-flex flex-align-center header__item">
              <div className="header__sideline">
                <div></div>
              </div>
              <div>
                <span
                  data-content="Kunstgießerei Strassacker"
                  className="text-uppercase">
                  Kunstgießerei Strassacker
                </span>
              </div>
            </div>
            <div className="header__item">
              <h1>Traditionelles Handwerk, moderne Fertigungstechnik</h1>
            </div>
          </div>
          <div className="d-flex flex-column pos-relative header__sideboxes">
            <div className="d-flex flex-align-center flex-content-center header__sidebox">
              <div className="text-uppercase">sakral</div>
            </div>
            <div className="d-flex flex-align-center flex-content-center header__sidebox">
              <div className="text-uppercase">editition</div>
            </div>
            <div className="d-flex flex-align-center flex-content-center header__sidebox">
              <div className="text-uppercase">manufaktur</div>
            </div>
            <div className="pos-absolute background"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
