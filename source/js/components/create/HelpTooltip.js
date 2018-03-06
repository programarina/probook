import React, { Component } from 'react';

class HelpTooltip extends Component {
  render() {
    return (
      <div className='tooltipContainer'>
        <div className='tooltipBox'>
          <p 
            className="tooltip-bottom" 
            data-tooltip="I’m the tooltip text.">?</p>
        </div>
      </div>
    );
  }
}

export default HelpTooltip;
