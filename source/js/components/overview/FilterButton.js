import React from 'react';

const FilterButton = (props) => {
  return (
    <div className='calendarBtnContainer'>
      <div className='svgContainer'>
        <svg
          height="40"
          width="40"
          className={props.showCalendar ? `leftArrow` : `rightArrow`}
          onClick={props.toggleClass}>
          <polyline
            points="10,0 36,20, 10,40"
            fill='transparent'
            stroke='rgb(248, 105, 100)'
            strokeWidth='4' />
        </svg>
      </div>
    </div>

  );
}

export default FilterButton;