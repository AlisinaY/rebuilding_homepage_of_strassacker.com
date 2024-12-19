import React from 'react';

import './Showcase.css';

export default function NewsSchowcase() {
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
            <h3>Aktuelles</h3>
          </div>
        </div>

        <div className="d-flex flex-align-center ns__container">
          <div className="d-flex ns__item">
            <div className="ns__img-container">
              <img src="https://www.strassacker.com/img/containers/assets/presse/industrielle-3d-drucker-modernisieren-kunstgenuss/kunstguss.jpg/d803d341bc4631076edb0adc5881d571.webp" />
            </div>
            <div className="ns__img-content">
              <p>
                Industrielle 3D-Drucker modernisieren den klassischen Kunstguss
              </p>
            </div>
            <div className="d-flex flex-align-center">
              <div className="ns__img-sideline"></div>
              <div className="ns__img-date">
                <span>12.10.22</span>
              </div>
            </div>
            <div className="d-flex flex-align-center ns__btn">
              <div>
                <span className="text-uppercase clr-black ">ansehen</span>
              </div>
              <div className="ns__btn-sideline">
                <div></div>
              </div>
            </div>
          </div>
          <div className="d-flex ns__item">
            <div className="ns__img-container">
              <img src="https://www.strassacker.com/img/containers/assets/inkedutoja-18.6.2022--%2874%29_li-1713951379.jpg/59a78113777cbb45804bdebc6f364773.webp" />
            </div>
            <div
              style={{ width: '300px', border: 'none' }}
              className="ns__img-content ns__item"
            >
              <p>
                77 Bronzestelen aus Deutschland für Gedenkstätte in Norwegen
              </p>
            </div>
            <div style={{ marginTop: '25px' }} className="ns__item">
              <div className="d-flex flex-align-center">
                <div className="ns__img-sideline"></div>
                <div className="ns__img-date">
                  <span>datum</span>
                </div>
              </div>
            </div>

            <div className="d-flex flex-align-center ns__btn">
              <div>
                <span className="text-uppercase clr-black">ansehen</span>
              </div>
              <div className="ns__btn-sideline">
                <div></div>
              </div>
            </div>
          </div>

          <div className="d-flex ns__item">
            <div className="ns__img-container">
              <img src="https://www.strassacker.com/img/containers/assets/d62_0021_low_res.1000x0-1718173536.webp/c32f8ea71c17abf18e3940c0d1d1cbac.webp" />
            </div>
            <div className="ns__img-content">
              <p>"Paperbomb": Ein Symbol für Frieden und Neuanfang</p>
            </div>
            <div className="d-flex flex-align-center">
              <div className="ns__img-sideline"></div>
              <div className="ns__img-date">
                <span>datum</span>
              </div>
            </div>
            <div className="d-flex flex-align-center ns__btn">
              <div>
                <span className="text-uppercase clr-black">ansehen</span>
              </div>
              <div className="ns__btn-sideline">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
