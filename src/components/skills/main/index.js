import React from 'react';
import SkillItem from './skill-item';
import imgJavascript from '../images/javascript.svg';
import imgHtml5 from '../images/html5.svg';
import imgCss3 from '../images/css3.svg';
import imgLess from '../images/less.svg';
import imgBootstrap from '../images/bootstrap.svg';
import imgReact from '../images/react.svg';
import imgRedux from '../images/redux.svg';
import imgKnockout from '../images/knockout.svg';
import imgJquery from '../images/jquery.svg';
import imgNode from '../images/node.svg';
import imgWebpack from '../images/webpack.svg';


const Main = () => {
  return (
    <main>
      <SkillItem label={'Javascript'} imgSrc={imgJavascript}/>
      <SkillItem label={'HTML5'} imgSrc={imgHtml5}/>
      <SkillItem label={'CSS3'} imgSrc={imgCss3}/>
      <SkillItem label={'less'} imgSrc={imgLess}/>
      <SkillItem label={'Bootstrap'} imgSrc={imgBootstrap}/>
      <SkillItem label={'React'} imgSrc={imgReact}/>
      <SkillItem label={'Redux'} imgSrc={imgRedux}/>
      <SkillItem label={'Knockout.js'} imgSrc={imgKnockout}/>
      <SkillItem label={'jQuery'} imgSrc={imgJquery}/>
      <SkillItem label={'Node.js'} imgSrc={imgNode}/>
      <SkillItem label={'Webpack'} imgSrc={imgWebpack}/>
    </main>
  );
};

export default Main;