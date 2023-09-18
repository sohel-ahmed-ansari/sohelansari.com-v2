import React from 'react';
import LogoWithText from '../logo-with-text';
import imgJavascript from './images/javascript.svg';
import imgHtml5 from './images/html5.svg';
import imgCss3 from './images/css3.svg';
import imgLess from './images/less.svg';
import imgTypescript from './images/typescript.svg';
import imgBootstrap from './images/bootstrap.svg';
import imgReact from './images/react.svg';
import imgRedux from './images/redux.svg';
import imgKnockout from './images/knockout.svg';
import imgJquery from './images/jquery.svg';
import imgNode from './images/node.svg';
import imgWebpack from './images/webpack.svg';

const Main = () => {
  return (
    <main className="section-main">
      <LogoWithText label={'React'} imgSrc={imgReact} />
      <LogoWithText label={'Redux'} imgSrc={imgRedux} />
      <LogoWithText label={'TypeScript'} imgSrc={imgTypescript} />
      <LogoWithText label={'Node.js'} imgSrc={imgNode} />
      <LogoWithText label={'Javascript'} imgSrc={imgJavascript} />
      <LogoWithText label={'HTML5'} imgSrc={imgHtml5} />
      <LogoWithText label={'CSS3'} imgSrc={imgCss3} />
      <LogoWithText label={'Knockout.js'} imgSrc={imgKnockout} />
      <LogoWithText label={'jQuery'} imgSrc={imgJquery} />
      <LogoWithText label={'less'} imgSrc={imgLess} />
      <LogoWithText label={'Bootstrap'} imgSrc={imgBootstrap} />
      <LogoWithText label={'webpack'} imgSrc={imgWebpack} />
    </main>
  );
};

export default Main;
