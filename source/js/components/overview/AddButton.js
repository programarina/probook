import React from 'react';

const AddButton = () => {
  return (
    <svg width='100' height='100' className='addNoteBtn'>
      <defs>
        <defs>
          <filter id='dropshadow' x='-40%' y='-40%' width='180%' height='180%' filterUnits='userSpaceOnUse'>
            <feGaussianBlur in='SourceAlpha' stdDeviation='3' />
            <feOffset dx='5' dy='5' result='offsetblur' />
            <feOffset dx='-5' dy='-5' result='offsetblur' />
            <feMerge>
              <feMergeNode />
              <feMergeNode in='SourceGraphic' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
      </defs>
      <circle cx='50' cy='50' r='40' filter='url(#dropshadow)' id='desktopCircle' />
      {/* <circle cx='50' cy='50' r='25' filter='url(#dropshadow)' id='mobileCircle' /> */}
      <text x='50%' y='50%' textAnchor='middle' strokeWidth='2px' dy='0.3em'>+</text>
    </svg>
  );
}
export default AddButton;