import React from 'react';

const SkillItem = ({label, imgSrc}) => (
  <div className="skill-item">
    <div className="skill-item__title">{label}</div>
    <div className="skill-item__image">
      <img src={imgSrc}></img>
    </div>
  </div>
);

export default SkillItem;