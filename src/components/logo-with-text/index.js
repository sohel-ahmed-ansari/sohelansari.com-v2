import React from 'react';
import './style.less';

const DivContainer = ({children, className}) => (
  <div className={className}>
    {children}
  </div>
);

const AnchorContainer = ({children, href, className}) => (
  <a className={className} href={href} target="_blank" rel="noopener noreferrer external">
    {children}
  </a>
);

const LogoWithText = ({label = '', imgSrc, isLightBg, href=''}) => {
  let Container;
  if (href) {
    Container = AnchorContainer;
  } else {
    Container = DivContainer;
  }
  return (
    <div className="logo">
      <Container
        className={`logo__image ${isLightBg ? 'logo__image--light-bg' : ''}`}
        href={href}
      >
        <img src={imgSrc} alt={label}></img>
      </Container>
      <div className="logo__title">{label}</div>
    </div>
  );
};

export default LogoWithText;