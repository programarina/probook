import React from 'react';

const FilterButton = (props) => {
  return (
    <div className='calendarBtnContainer'>
      <svg
        height="40"
        width="40"
        className={props.showCalendar ? `leftArrow` : `rightArrow`}
        onClick={props.toggleClass}>
        <polyline
          points="20,0 36,20, 20,40"
          fill='transparent'
          stroke='white'
          strokeWidth='4' />
      </svg>
    </div>
  );
}

export default FilterButton;