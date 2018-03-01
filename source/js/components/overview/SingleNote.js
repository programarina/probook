import React, { Component } from 'react';

class SingleNote extends Component {
  render() {
    return (
      <div className='singleNote'>
        <h4>Note title</h4>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button className='editBtn'><img src='../../../assets/img/editBtn.png' alt='edit button' width='20px' /></button>
        <button className='deleteNoteBtn'>x</button>
        <ul className='snippetTags'>
          <li>JS</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </div>
    );
  }
}

export default SingleNote;
