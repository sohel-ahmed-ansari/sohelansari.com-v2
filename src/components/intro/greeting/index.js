import React from 'react';

const Greeting = () => (
  <header className="intro-row">
    <div className="greeting">
      <div className="greeting__title">Hi, I'm <span className="intro__text-color3">Sohel</span></div>
      <div className="greeting__sub-title">
        <span className="greeting__sub-title-small">I am a</span>&nbsp;
        <span className="intro__text-color1">Front</span><span className="intro__text-color2">End</span>&nbsp;
        <span className="intro__text-color3">Developer</span>
      </div>
    </div>
    <div className="intro-row__box intro-row__box--color1" />
    <div className="intro-row__box" />
  </header>
);

export default Greeting;