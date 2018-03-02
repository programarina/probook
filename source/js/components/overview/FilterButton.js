import React from 'react';

const FilterButton = (props) => {
  return (
    <div className='calendarBtnContainer'>
      <div className='svgContainer'>
        <svg
          height="30"
          width="30"
          className={props.showCalendar ? `leftArrow` : `rightArrow`}
          onClick={props.toggleClass}>
          <polyline
            points="10,0 26,15, 10,30"
            fill='transparent'
            stroke='rgb(248, 105, 100)'
            strokeWidth='4' />
        </svg>
      </div>
    </div>

  );
}

export default FilterButton;