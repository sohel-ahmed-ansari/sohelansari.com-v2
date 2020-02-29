import React from 'react';
import './style.less';

const LogoWithText = ({label = '', imgSrc, isLightBg}) => (
  <div className="logo">
    <div className={`logo__image ${isLightBg ? 'logo__image--light-bg' : ''}`}>
      <img src={imgSrc}></img>
    </div>
    <div className="logo__title">{label}</div>
  </div>
);

export default LogoWithText;