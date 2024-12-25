import React, { useState } from "react";

import Footer from "../Footer/Footer";
import "./CareerShowcase.css";
import { hover } from "@testing-library/user-event/dist/hover";

const careeerShowcasedata = [
  {
    img: "https://www.strassacker.com/img/containers/assets/karriere/k-0.jpg/c7f967139f5e47dd731796f1b54809d6.webp",
    text: "Karriere"
  },
  {
    img: "https://www.strassacker.com/img/containers/assets/karriere/88.jpg/3a18e3676d34a5f8283dca388e8ae006.webp",
    text: "Offene Stellen"
  }
];

export default function CareerShowcase() {
  const [hovered, setHovered] = useState(null);

  function handleMouseOver(index) {
    setHovered(index);
  }

  function handleMouseOut() {
    setHovered(null);
  }

  return (
    <>
      {/* Career Show Case Main */}
      <div className="d-flex flex-align-center cs-main">
        {/* CS-Main Header div */}
        <div className=" d-flex  cs-main__header">
          <div className="d-flex flex-align-center cs-main__items">
            <div className="d-flex flex-align-center cs-main__sideline">
              <div></div>
            </div>
            <div>
              <h4 className="text-uppercase cs-main__items-txt">
                karriere bei strassacker
              </h4>
            </div>
          </div>
          <div className="cs-main__heading">
            <h2 className="">Komm ins Team!</h2>
          </div>
        </div>
        {/* CS-Main Container*/}
        <div className="d-flex cs-main__container">
          {careeerShowcasedata.map((item, index) => {
            return (
              <div
                onMouseOver={function () {
                  handleMouseOver(index);
                }}
                onMouseOut={handleMouseOut}
                className={
                  item.text === "Offene Stellen"
                    ? "d-flex flex-align-center cs-main__left row-reverse"
                    : "d-flex flex-align-center cs-main__left"
                }>
                <div className="cs-main__img-container">
                  <img
                    className={
                      hovered === index
                        ? "cs-main__img--hovered"
                        : "cs-main__img"
                    }
                    src={item.img}></img>
                </div>
                <div className="d-flex flex-align-center cs-main__item">
                  <div className="cs-main__title-heading">
                    <h2> {item.text} </h2>
                  </div>
                  <div className=" d-flex flex-align-center cs-main__title-text">
                    <div className="text-uppercase cs-main__title-txt">
                      mehr
                    </div>
                    <div
                      className={
                        hovered === index
                          ? "cs-main__title-sideline--hovered"
                          : "cs-main__title-sideline"
                      }>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="pos-relative cs-main__middle">
            <div className="pos-absolute cs-main__middleline"></div>
            <div className="pos-absolute cs-main__title"></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
