import React from 'react';
import LogoWithText from '../logo-with-text';
import imgZeus from './images/zeus.png';
import imgAccenture from './images/accenture.png';
import imgNexsales from './images/nexsales.png';
import imgOnecom from './images/onecom.svg';
import imgForto from './images/forto.svg';

const Main = () => {
  return (
    <main className="section-main">
      <LogoWithText
        imgSrc={imgZeus}
        isLightBg={true}
        href="https://www.zeuslearning.com"
      />
      <LogoWithText
        imgSrc={imgAccenture}
        isLightBg={true}
        href="https://www.accenture.com"
      />
      <LogoWithText
        imgSrc={imgNexsales}
        isLightBg={true}
        href="http://www.nexsales.com"
      />
      <LogoWithText
        imgSrc={imgOnecom}
        isLightBg={true}
        href="https://www.one.com/"
      />
      <LogoWithText
        imgSrc={imgForto}
        isLightBg={true}
        label="(current employer)"
        href="https://forto.com"
      />
    </main>
  );
};

export default Main;
