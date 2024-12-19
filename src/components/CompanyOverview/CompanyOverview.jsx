import React from 'react';
import './CompanyOverview.css';

const CompanyOverview = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="pos-relative d-flex  co-main">
      <div className="d-flex co-main__left">
        <div className="d-flex flex-align-center co-main__left-title">
          <div className="co-main__left-sideline"></div>
          <div>
            <h4 className="text-uppercase"> über strassacker</h4>
          </div>
        </div>
        <div className="co-main__left-heading">
          <h2>Tradition und Moderne</h2>
        </div>
        <div className="co-main__left-txt">
          <p>Als familiengeführtes Unternehmen in der vierten</p>
          <p>Generation stehen wir für Tradition im Handwerk. Seit</p>
          <p>über einem Jahrhundert widmen wir uns der Kunst des</p>
          <p>Gusses und sind stolz darauf, unsere Leidenschaft von</p>
          <p>Generation zu Generation weiterzugeben.</p>
        </div>
        <div
          onMouseOut={handleMouseOut}
          onMouseOver={handleMouseOver}
          className="d-flex flex-align-center co-main__left-btn"
        >
          <div>
            <h4 className="co-main__left-btntxt text-uppercase">historie</h4>
          </div>
          <div
            className={
              isHovered
                ? 'co-main__left-btnsideline--hovered'
                : 'co-main__left-btnsideline'
            }
          >
            <div></div>
          </div>
        </div>
      </div>
      <div className="co-main__right"></div>
      <div className="test pos-absolute"></div>
      <div className="test2 pos-absolute"></div>
      <div className="test3 pos-absolute"></div>
      <div className="test4 pos-absolute"></div>
      <div className="test5 pos-absolute"></div>
      <div className="pos-absolute d-flex co-main__imgcontainer">
        <div className="d-flex co-main__items">
          <div className="co-main__item">
            <img
              src="https://www.strassacker.com/img/containers/assets/archiv/lemonize/demo/home/10_ernst_strassacker_mit_enkeln.png/c54869ad5514b547ad2e7e6f0e5e9e3d.webp"
              alt="auf dem Bild sind drei Kinder zu sehen"
            />
          </div>
          <div className="co-main__item">
            <img
              src="https://www.strassacker.com/img/containers/assets/archiv/lemonize/demo/home/bildschirmfoto-2023-03-07-um-13.34.35.png/67015cd4bd6c5c3067a224440b8d81ea.webp"
              alt="ein Mann mit den Produkten"
            />
          </div>
          <div className="co-main__item">
            <img
              src="https://www.strassacker.com/img/containers/assets/archiv/lemonize/demo/home/bildschirmfoto-2023-03-07-um-08.42.23.png/868177b7901620d2855598a851d95763.webp"
              alt="ein Gruppenbild"
            />
          </div>
        </div>
        <div className="d-flex co-main__items">
          <div className="co-main__item">
            <img
              src="https://www.strassacker.com/img/containers/assets/archiv/lemonize/demo/home/6_drueckerei_um_1935.png/b27d611c68faf6d8dedc2337ed0a0262.webp"
              alt="ein Mann auf der Arbeit"
            />
          </div>
          <div className="co-main__item">
            <img
              src="https://www.strassacker.com/img/containers/assets/archiv/lemonize/demo/home/bildschirmfoto-2023-03-07-um-13.34.56.png/42f1aedd45bf71d3cec775abe1698443.webp"
              alt="Baustelle"
            />
          </div>
          <div className="co-main__item">
            <img
              src="https://www.strassacker.com/img/containers/assets/archiv/lemonize/demo/home/bildschirmfoto-2023-03-06-um-16.43.26.png/b9bbf341daaf313577ccb0124772b628.webp"
              alt="ein Mann auf dem Foto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
