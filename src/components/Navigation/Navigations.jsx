import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Modal from './Modal';

import './Navigation.css';

const Navigation = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const navItems = [
    'startseite',
    'portfolio',
    'aktuelles',
    'karriere',
    'kontakt',
  ];

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <>
      <div className="d-flex flex-align-center nav">
        <div className="nav__logo">
          <img
            className="nav__img"
            src="https://www.strassacker.com/icons/archiv/lemonize/logos/str-logo.svg"
            alt="This is the Logo"
          />
        </div>
        <div className="nav-navbars">
          <ul className="d-flex nav__list">
            {navItems.map((item, i) => {
              return (
                <li
                  onMouseOver={() => handleMouseOver(i)}
                  onMouseOut={handleMouseOut}
                  key={i}
                  className="d-flex flex-align-center nav__item"
                >
                  <div
                    className={
                      hoveredIndex === i
                        ? 'nav__sideline--hovered '
                        : 'nav__sideline'
                    }
                  >
                    <div
                      className={
                        hoveredIndex === i ? 'nav__sideline--hovered ' : ''
                      }
                    ></div>
                  </div>
                  <div className="nav__link">
                    <Link to="#"> {item} </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div onClick={openModal} className="nav__bars">
          <FontAwesomeIcon className="nav__icon" icon={faBars} />
        </div>
      </div>
      {showModal && (
        <Modal onClose={closeModal}>
          <h2>Ich bin ein Modal</h2>
          <button onClick={closeModal}>Schließen</button>
        </Modal>
      )}
    </>
  );
};

export default Navigation;
