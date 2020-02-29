import React from 'react';
import LogoWithText from '../logo-with-text';
import imgZeus from './images/zeus.png';
import imgAccenture from './images/accenture.png';
import imgNexsales from './images/nexsales.png';
import imgOnecom from './images/onecom.svg';



const Main = () => {
  return (
    <main class="section-main">
      <LogoWithText imgSrc={imgZeus} isLightBg={true}/>
      <LogoWithText imgSrc={imgAccenture} isLightBg={true}/>
      <LogoWithText imgSrc={imgNexsales} isLightBg={true}/>
      <LogoWithText imgSrc={imgOnecom} isLightBg={true} label="(current employer)"/>
    </main>
  );
};

export default Main;