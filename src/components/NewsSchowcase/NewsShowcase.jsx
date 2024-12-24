import React from "react";

import "./Showcase.css";

const newsShocaseData = [
  {
    img: "https://www.strassacker.com/img/containers/assets/presse/industrielle-3d-drucker-modernisieren-kunstgenuss/kunstguss.jpg/d803d341bc4631076edb0adc5881d571.webp",
    desc: "Industrielle 3D-Drucker modernisieren den klassischen Kunstguss",
    date: "17.10.19"
  },
  {
    img: "https://www.strassacker.com/img/containers/assets/inkedutoja-18.6.2022--%2874%29_li-1713951379.jpg/59a78113777cbb45804bdebc6f364773.webp",
    desc: "77 Bronzestelen aus Deutschland für Gedenkstätte in Norwegen",
    date: "17.10.19"
  },

  {
    img: "https://www.strassacker.com/img/containers/assets/d62_0021_low_res.1000x0-1718173536.webp/c32f8ea71c17abf18e3940c0d1d1cbac.webp",
    desc: "Paperbomb: Ein Symbol für Frieden und Neuanfang",
    date: "17.10.19"
  }
];

export default function NewsSchowcase() {
  const [hoverOver, setHoverOver] = React.useState(null);

  const handleMouseOver = (index) => {
    setHoverOver(index);
  };

  const handleMouseOut = () => {
    setHoverOver(null);
  };

  console.log(hoverOver);

  return (
    <>
      <div className="d-flex flex-align-center ns">
        <div className="d-flex ns__items">
          <div className="d-flex flex-align-center ns__title">
            <div className="ns__title-sideline"></div>
            <div className="ns__title-heading">
              <h4 className="text-uppercase">strassacker news</h4>
            </div>
          </div>
          <div className="ns__title">
            <h2>Aktuelles</h2>
          </div>
        </div>

        <div className="d-flex flex-align-center pos-relative ns-container">
          <div className="pos-absolute ns-container__line-1"></div>
          <div className="pos-absolute ns-container__line-2"></div>
          {newsShocaseData.map((item, i) => {
            return (
              <div
                onMouseOver={() => handleMouseOver(i)}
                onMouseOut={handleMouseOut}
                className="d-flex flex-align-center ns-container__item"
                key={i}>
                <div className="ns-container__imgs">
                  <img
                    className={
                      hoverOver === i
                        ? "ns-container__img--hovered"
                        : "ns-container__img"
                    }
                    src={item.img}
                  />
                </div>
                <div className="ns-container__desc">
                  <div className="ns-container__txt">
                    <div>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-align-center ns-container__date">
                  <div className="ns-container__datesideline">
                    <div></div>
                  </div>
                  <div className="ns-container__date-date">
                    <span>{item.date}</span>
                  </div>
                </div>
                <div className="d-flex flex-align-center ns-container__btn">
                  <div className="ns-container__btn-txt">
                    <div>
                      <span>Ansehen</span>
                    </div>
                  </div>
                  <div
                    className={
                      hoverOver === i
                        ? "ns-container__btn-sideline--hovered"
                        : "ns-container__btn-sideline"
                    }>
                    <div></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
