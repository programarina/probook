import React from 'react';
import SingleNote from './SingleNote';

const OneDay = (props) => {
  return (
    <div className='oneDay'>
      <h3>Date created</h3>
      {props.notes.map(note => <SingleNote note={note} key={note.body} />)}
    </div>
  );
}

export default OneDay;
