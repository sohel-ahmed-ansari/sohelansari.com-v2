import React from 'react';
import Header from '../section-header';
import Main from './main';
import imgCoffee from './images/coffee.svg';

const Skills = () => (
  <section className="section">
    <Header title="Skills" titleIconSrc={imgCoffee}></Header>
    <Main></Main>
  </section>
);

export default Skills;