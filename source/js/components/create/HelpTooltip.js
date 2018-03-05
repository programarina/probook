import React, { Component } from 'react';

class HelpTooltip extends Component {
  render() {
    return (
      <div className='tooltipContainer'>
        <div className="tooltip">?
        <span className="tooltiptext">
        <p>For code use: ```{`<code>`} ```</p>
        </span>
        </div>
      </div>
    );
  }
}

export default HelpTooltip;
