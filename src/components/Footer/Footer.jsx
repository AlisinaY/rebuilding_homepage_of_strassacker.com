import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faLessThan } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

export default function Footer() {
  const [clicked, setClicked] = useState(false);

  const toggleHandle = () => {
    setClicked((prevState) => !prevState);
  };

  return (
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
          <div className="text-uppercase footer__contact">kontakt</div>
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
              className="d-flex flex-align-center footer__btn-container"
            >
              <div className="footer__btn">German</div>
              <div
                className={
                  !clicked ? 'footer__btn-icon--hovered' : 'footer__btn-icon'
                }
              >
                <FontAwesomeIcon icon={faLessThan} />
              </div>
            </div>
            <div
              className={!clicked ? 'footer__btn--clicked' : 'footer__dropdown'}
            >
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
            <h3 style={{ fontSize: '1.5rem' }} className="text-uppercase">
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
  );
}
