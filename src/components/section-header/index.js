import React from 'react';
import './style.less';

const SectionHeader = ({titleIconSrc, title}) => (
  <header className="section-header">
    <div className="section-header__title-icon">
      <img src={titleIconSrc} alt=""></img>
    </div>
    <h1 className="section-header__title">{title}</h1>
  </header>
);

export default SectionHeader;