import React from 'react';

const MenuItem = ({ menuData = [] }) => {
  const [isHovered, setIsHovered] = React.useState(null);

  const handleOnMouseOver = (title) => {
    setIsHovered(title);
  };

  const handleOnMouseOut = () => {
    setIsHovered(null);
  };

  // Reusable render function
  const renderItems = (data) =>
    data.map((item, i) => (
      <div
        key={i}
        onMouseOver={() => handleOnMouseOver(item.mtitle)}
        onMouseOut={handleOnMouseOut}
        data-content={item.mtitle}
        className="d-flex s-menu__items"
      >
        <div className="d-flex flex-align-center s-menu__item">
          <div className="s-menu__title">
            <h4 className="text-uppercase">{item.mtitle}</h4>
          </div>
          <div
            className={
              isHovered === item.mtitle
                ? 's-menu__sideline--hovered'
                : 's-menu__sideline'
            }
          ></div>
        </div>
        <div className="pos-relative s-menu__item">
          <div className="s-menu__img">
            <img src={item.imgScr} alt={item.mtitle} />
          </div>
          <div
            className={
              isHovered === item.mtitle
                ? 'd-none'
                : 'pos-absolute s-menu__heading'
            }
            data-content={item.heading}
          >
            <h2>{item.heading}</h2>
          </div>
          <div
            className={
              isHovered === item.mtitle
                ? 'pos-absolute d-flex flex-align-center s-menu__item--hovered'
                : 'd-none'
            }
          >
            <div>
              <img
                className="s-menu__img--hovered"
                src={item.logo}
                alt="Logo"
              />
            </div>
          </div>
        </div>
        <div className="s-menu__item">
          <div className="s-menu__text">
            <p>{item.text}</p>
          </div>
        </div>
      </div>
    ));

  return <>{renderItems(menuData)}</>;
};

export { MenuItem };
