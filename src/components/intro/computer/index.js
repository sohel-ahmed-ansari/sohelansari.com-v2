import React from 'react';

import './style.less';
import imgMonitor from './images/monitor.svg';
import imgKeyboard from './images/keyboard.svg';

const Computer = () => {
  return (
    <div className="computer">
      <img className="computer_monitor" src={imgMonitor} alt=""></img>
      <img className="computer_keyboard" src={imgKeyboard} alt=""></img>
    </div>
  );
};

export default Computer;