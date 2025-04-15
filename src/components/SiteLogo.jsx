import React from "react";
import AnimeLogo from "../assets/anime-logo.png"

const SiteLogo = () => {
  return (
    <>
    <div className="anime__title">
      <div className="logo__diamond"><img className="anime__logo" src={AnimeLogo} alt="" /></div> Anithon
    </div>
    </>
  );
};

export default SiteLogo;
