import React from 'react';

import './style.less';
import Intro from '../intro';
import Skills from '../skills';
import WorkedFor from '../worked-for';

const App = () => {
  return (
    <div className="app">
      <Intro/>
      <Skills/>
      <WorkedFor/>
    </div>
  );
};

export default App;