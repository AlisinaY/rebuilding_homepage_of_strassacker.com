import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faLessThan } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

export default function Footer() {
  const [clicked, setClicked] = useState(false);

  const toggleHandle = () => {
    setClicked((prevState) => !prevState);
  };

  return (
    <>
      <div className="f-phone">
        <div className="f-phone__logo">
          <div className="f-phone__logo--img">
            <img src="https://www.strassacker.com/icons/archiv/lemonize/logos/str-logo.svg" />
          </div>
          <div className="f-phone__companyname">
            <h6>Ernst Strassacker GmbH & Co. KG Kunstgießerei </h6>
          </div>
        </div>

        <div className="f-phone__contacts">
          <div className="f-phone__conatcts--address">
            <div className="f-phone__contacts--street">
              <span>Staufenecker Straße 19</span>
            </div>
            <div className="f-phone__contacts--city">
              <span>D-73079 Süßen</span>
            </div>
          </div>

          <div className="f-phone__contacts--elctaddress">
            <div className="f-phone__contacts--mailaddress">
              <span>E | mail@strassacker.de</span>
            </div>
            <div className="f-phone__contacts--phone">
              <span>T | 07162 16-0</span>
            </div>
          </div>

          <div className="f-phone__contacts--dropdown"></div>
        </div>

        <div className="f-phone__infos">
          <div className="f-phone__info">
            <ul className="f-phone__items">
              <li className="f-phone__item">
                <a className="f-phone__link">Kontakt</a>
              </li>
              <li className="f-phone__item">
                <a className="f-phone__link">Impressum</a>
              </li>
              <li className="f-phone__item">
                <a className="f-phone__link">Datenshutz</a>
              </li>
              <li className="f-phone__item">
                <a className="f-phone__link">Cookies</a>
              </li>
            </ul>
          </div>
          <div className="f-phone__icon">
            <ul className="f-phone__items--icons">
              <li className="f-phone__item">
                <a className="f-phone__link">Facebook</a>
              </li>
              <li className="f-phone__item">
                <a className="f-phone__link">Polkadot</a>
              </li>
              <li className="f-phone__item">
                <a className="f-phone__link">Instagramm</a>
              </li>
              <li className="f-phone__item">
                <a className="f-phone__link">Youtube</a>
              </li>
              <li className="f-phone__item">
                <a className="f-phone__link">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="d-flex flex-align-center footer">
        <div className=" d-flex footer__items">
          <div className="d-flex footer__item">
            <div className="footer__logo">
              <img
                src="https://www.strassacker.com/icons/archiv/lemonize/logos/str-logo.svg"
                width="100px"
              />
            </div>
            <div className="footer__title">
              <p>Ernst Strassacker GmbH & Co. KG Kunstgießerei</p>
            </div>
          </div>
          <div className="d-flex  footer__item">
            <div className="text-uppercase footer__contact--heading">
              kontakt
            </div>
            <div className="footer__contact">
              <p>Staufenecker Straße 19</p>
              <p>D-73079 Süßen</p>
            </div>
            <div className="footer__contact">
              <p>E | mail@strassacker.de</p>
              <p>T | 0716216-0</p>
            </div>
          </div>
          <div className="d-flex footer__item">
            <div className="footer__lang">Sprache</div>
            <div className="footer__lang-dropdown">
              <div
                onClick={toggleHandle}
                className="d-flex flex-align-center footer__btn-container">
                <div className="footer__btn">German</div>
                <div
                  className={
                    !clicked ? "footer__btn-icon--hovered" : "footer__btn-icon"
                  }>
                  <FontAwesomeIcon icon={faLessThan} />
                </div>
              </div>
              <div
                className={
                  !clicked ? "footer__btn--clicked" : "footer__dropdown"
                }>
                <div className="d-flex flex-align-center footer__langgerman">
                  <span>
                    <FontAwesomeIcon icon={faXmark} />
                  </span>
                  <a className="footer__deutsch" href="#">
                    Deutsch
                  </a>
                </div>
                <div className="d-flex flex-align-center footer__langenglish">
                  <a className="footer__english" href="#">
                    English
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__middleline"></div>
        <div className="d-flex footer__items">
          <div className="d-flex flex-align-center footer__links-list">
            <div>
              <h3 style={{ fontSize: "1.5rem" }} className="text-uppercase">
                folgt uns
              </h3>
            </div>
            <div className="footer__list-icons">
              <ul>
                <li>
                  <a>
                    <FontAwesomeIcon />
                  </a>
                </li>
                <li>
                  <a>P</a>
                </li>
                <li>
                  <a>Instagramm</a>
                </li>
                <li>
                  <a>Youtube</a>
                </li>
                <li>
                  <a>in</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__links-list">
            <ul>
              <li>
                <a>Kontakt</a>
              </li>
              <li>
                <a>Impressum</a>
              </li>
              <li>
                <a>Datenschutz</a>
              </li>
              <li>
                <a>Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
