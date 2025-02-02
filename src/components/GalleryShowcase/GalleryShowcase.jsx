import React, { useState } from "react";

import { Button } from "../StrassackerMenu/Button";
import "./GalleryShowcase.css";

const data = [
  {
    gtitle: "Galerie",
    imgScr:
      "https://www.strassacker.com/img/containers/assets/galerie_neu/2023-11-21_strassacker_tobias-froehner-photography_0417-hdr.jpg/eecc0cd0138a6f6a647c4826b53e11fb.webp"
  },
  {
    gtitle: "showroom",
    imgScr:
      "https://www.strassacker.com/img/containers/assets/galerie_neu/galerie-3.1.jpg/6f9fbf326c6c73edaed81c98c7bb6623.webp"
  },
  {
    gtitle: "Ausstellung",
    imgScr:
      "https://www.strassacker.com/img/containers/assets/galerie_neu/galerie-1-1706610338.jpg/e054808f772258e7544bd7b2527faaa9.webp"
  }
];

export default function GalleryShowcase() {
  const [hovered, setHovered] = useState(null);

  const handleMouseOver = (index) => {
    setHovered(index);
  };

  const handleMouseOut = () => {
    setHovered(null);
  };

  return (
    <>
      <div className="d-flex flex-align-center flex-column gs__container">
        {/* Gallery Showcase Second Part from gs__cotainer class design for mobile and tablet */}
        <div className="gs-main">
          <div className="gs-main__header">
            <div className="gs-main__title">
              <div className="gs-main__sideline"></div>
              <div className="gs-main__titledesc">
                <span className="text-uppercase">ihr besuch bei uns</span>
              </div>
            </div>
            <div className="gs-main__heading">
              <h4>Galerien Strassacker</h4>
            </div>
            <div className="gs-main__txt">
              <p>
                Erkunden Sie unsere Galerien in Süßen und erleben Sie die
                Schönheit der Kunst des Gießens in ihrer reinsten Form.
              </p>
            </div>
          </div>
          <div className="gs-main__imgcontainer">
            {data.map((item) => {
              return (
                <div className="gs-main__items">
                  <div className="gs-main__item">
                    <div className="gs-main__img--header">
                      <div className="gs-main__img--heading">
                        <h3 className="text-uppercase"> {item.gtitle} </h3>
                      </div>
                      <div className="gs-main__img--sideline"></div>
                    </div>
                    <div className="gs-main__img--image">
                      <img src={item.imgScr} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Gallery Showcase First Part from gs__container class */}
        <div className="d-flex flex-column gs__container-title">
          <div className="d-flex flex-align-center gs__container-text">
            <div className="gs__container-side-line">
              <div></div>
            </div>
            <div>
              <h5 className="gs__container-txt text-uppercase">
                ihr besuch bei uns
              </h5>
            </div>
          </div>
          <div className="gs__container-heading">
            <h4>Galerien Strassacker</h4>
          </div>
          <div className="gs__container-txt">
            <div>
              <p> Erkunden Sie unsere Galerien in Süßen und erleben Sie</p>
            </div>
            <div>
              <p> die Schönheit der Kunst des Gießens in ihrer reinsten</p>
            </div>
            <div>
              <p> Form.</p>
            </div>
          </div>
        </div>

        {/* Gallery Showcase Second Part from gs__cotainer class*/}
        <div className="d-flex flex-align-center gs__container-menu">
          {data.map((item, i) => {
            return (
              <div
                onMouseOver={() => handleMouseOver(i)}
                onMouseOut={handleMouseOut}
                key={i}
                data-content={item.gtitle}
                className="d-flex flex-column gs__container-items">
                <div className="d-flex flex-align-center gs__container-heading">
                  <div className="gs__container-heading__title">
                    {item.gtitle}
                  </div>
                  <div
                    className={`gs__container-sideline ${
                      hovered === i ? "gs__container-sideline--hovered" : ""
                    }`}>
                    <div></div>
                  </div>
                </div>
                <div className="gs__container-img">
                  <img
                    className={`${
                      hovered === i ? "gs__container-img--hovered" : ""
                    }`}
                    src={item.imgScr}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="gs__container-btn">
          <Button text={"ansehen"} />
        </div>
      </div>
    </>
  );
}
