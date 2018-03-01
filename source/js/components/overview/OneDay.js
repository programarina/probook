import React from 'react';
import SingleNote from './SingleNote';


const OneDay = () => {
  const arr = [1, 2, 3, 4];
  const today = new Date();
  return (
    <div className='oneDay'>
      <h3>Today - {today.toDateString()}</h3>
      {arr.map(note => <SingleNote note={note} key={note} />)}
    </div>
  );
}

export default OneDay;
