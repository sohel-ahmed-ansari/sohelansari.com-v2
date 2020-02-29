import React from 'react';

import './style.less';
import Intro from '../intro';
import Skills from '../skills';
import WorkedFor from '../worked-for';
import Footer from '../footer';

const App = () => {
  return (
    <div className="app">
      <Intro/>
      <Skills/>
      <WorkedFor/>
      <Footer/>
    </div>
  );
};

export default App;