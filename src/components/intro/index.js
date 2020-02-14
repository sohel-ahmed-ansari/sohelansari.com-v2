import React from 'react';

import './style.less';
import Computer from './computer';
import Greeting from './greeting';
import Summary from './summary';
import MobileBG from './mobile-bg';

const Intro = () => {
  return (
    <section className="intro">
      <Greeting/>
      <Summary/>
      <Computer/>
      <MobileBG/>
    </section>
  );
};

export default Intro;