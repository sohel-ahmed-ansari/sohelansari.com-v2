import React from 'react';

import './style.less';
import Computer from './computer';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-row">
        <div className="intro-row__left-gap"/>
        <div className="greeting">
          <div className="greeting__title">Hi, I'm <span className="intro__text-color3">Sohel</span></div>
          <div className="greeting__sub-title">
            <span className="greeting__sub-title-small">I am a</span>
            &nbsp;
            <span className="intro__text-color1">Front</span>
            <span className="intro__text-color2">End</span>
            &nbsp;
            <span className="intro__text-color3">Developer</span>
          </div>
        </div>
        <div className="intro-row__box intro-row__box--color1"/>
        <div className="intro-row__box"/>
      </div>
      <div className="intro-row">
        <div className="intro-row__left-gap"/>
        <div className="summary">
          <p>Experienced in everything from converting&nbsp;
            <span className="intro__text-color2">designs to functional pages</span>&nbsp;
            to developing&nbsp;
            <span className="intro__text-color3">complex applications</span>&nbsp;
            using&nbsp;
            <span className="intro__text-color1">modern frameworks</span>.
          </p>
          <p>Also experienced with backend development in <span className="intro__text-color1">Nodejs</span>.</p>
        </div>
        <div className="intro-row__box intro-row__box--color2"/>
      </div>
      <Computer/>
    </section>
  );
};

export default Intro;