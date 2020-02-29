import React from 'react';

import Header from '../section-header';
import imgWork from './images/work.svg';
import Main from './main';
import './style.less';

const WorkedFor = () => (
  <section className="section worked-for">
    <Header title="Worked for" titleIconSrc={imgWork}></Header>
    <Main/>
  </section>
);

export default WorkedFor;