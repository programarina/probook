import React from 'react';

const FilterButton = (props) => {
  return (
    <svg
      height="40"
      width="40"
      className={(!props.showCalendar) ? `calendarBtnContainer rightArrow` : `calendarBtnContainer leftArrow`}
      onClick={props.toggleClass}>
      <polyline
        points="20,0 36,20, 20,40"
        fill='transparent'
        stroke='white'
        strokeWidth='4' />
    </svg>
  );
}

export default FilterButton;