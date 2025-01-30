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

  return (
    <>
      <div className="newsshowcase">
        <div className="newsshowcase__header">
          <div className="newsshowcase__title">
            <div className="newsshowcase__titlesideline">
              <div></div>
            </div>
            <div className="newsshowcase__titletext">
              <span>über strassacker</span>
            </div>
          </div>
          <div className="newsshowcase__heading">
            <h5> Akutelles</h5>
          </div>
        </div>

        <div className="newsshowcase__main">
          {newsShocaseData.map((item) => {
            return (
              <div className="newsshowcase__items">
                <div className="newsshowcase__imgcontainer">
                  <img src={item.img} alt="" />
                </div>
                <div className="newsshowcase__footer">
                  <div className="newsshowcase__item">
                    <div className="newsshowcase__headeline">
                      <p> {item.desc} </p>
                    </div>
                    <div className="newsshowcase__date">
                      <div className="newsshowcase__datesideline">
                        <div></div>
                      </div>
                      <div className="newsshowcase__datetext">
                        <span> {item.date} </span>
                      </div>
                    </div>
                  </div>
                  <div className="newsshowcase__item">
                    <div className="newsshowcase__btn">
                      <div className="newsshowcase__btn-container">
                        <div className="newsshowcase__btnline"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
                className="d-flex ns-container__item"
                key={i}>
                <div className="ns-container__imgs">
                  <img
                    className={`ns-container__img ${
                      hoverOver === i ? "ns-container__img--hovered" : ""
                    }`}
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
                    className={`ns-container__btn-sideline ${
                      hoverOver === i
                        ? "ns-container__btn-sideline--hovered"
                        : ""
                    } `}>
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
