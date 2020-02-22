import React from 'react';

import './style.less';
import Intro from '../intro';
import Skills from '../skills';

const App = () => {
  return (
    <div className="app">
      <Intro/>
      <Skills/>
    </div>
  );
};

export default App;