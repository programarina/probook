import React, { Component } from 'react';

class AddNote extends Component {
  render() {
    return (
      <div className='addNote'>
        <input type='text' placeholder='title' />
        <textarea placeholder='code' />
        <button>Save</button>
      </div>
    );
  }
}

export default AddNote;
