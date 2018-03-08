import React from 'react';
import SingleNote from './SingleNote';

const OneDay = (props) => {
  const today = new Date();
  return (
    <div className='oneDay'>
      <h3>Today - {today.toDateString()}</h3>
      {props.notes.map(note => <SingleNote note={note} key={note.body} />)}
    </div>
  );
}

export default OneDay;
