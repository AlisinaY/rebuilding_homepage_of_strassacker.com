import React from 'react';

import Navigation from '../Navigation/Navigations';
import Header from '../Header/Header';
import StrassackerMenu from '../StrassackerMenu/StrassackerMenu';
import HeroBanner from '../HeroBanner/HeroBanner';
import CompanyOverview from '../CompanyOverview/CompanyOverview';
import NewsSchowcase from '../NewsSchowcase/NewsShowcase';
import GalleryShowcase from '../GalleryShowcase/GalleryShowcase';
import CareerShowcase from '../CareerShowcase/CareerShowcase';

import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <Navigation /> <Header /> <StrassackerMenu /> <HeroBanner />
      <CompanyOverview /> <NewsSchowcase /> <GalleryShowcase />
      <CareerShowcase />
    </div>
  );
};

export default Main;
