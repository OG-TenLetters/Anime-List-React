import React from 'react';
import CompleteBanner from '../assets/CompleteBanner.svg'

const Banner = ({ page }) => {
  let banners = [];

  if (page === 'intro') {
    banners = [
      <img key="1" className="banner1" src={CompleteBanner} alt="" />,
      <img key="2" className="banner2" src={CompleteBanner} alt="" />,
    ];
  } else if (page === 'main') {
    banners = [
      <img key="1" className="banner1" src={CompleteBanner} alt="" />,
      <img key="3" className="banner3" src={CompleteBanner} alt="" />,
      <img key="2" className="banner2" src={CompleteBanner} alt="" />,
      <img key="4" className="banner4" src={CompleteBanner} alt="" />,
      <img key="5" className="banner5" src={CompleteBanner} alt="" />,
    ];
  }

  return <div className="banner__container">{banners}</div>;
};

export default Banner;