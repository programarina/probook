import React, { Component } from 'react';

class AddNote extends Component {
  render() {
    return (
      <div className='addNote'>
        <div>
          <input type='text' placeholder='title' />
          <textarea placeholder='write your code here...' />
          <div className='snippetInputForm'>
            <input type='text' placeholder='add snippets...' />
            <button>Add</button>
          </div>
        </div>
        <button>Save</button>
      </div>
    );
  }
}

export default AddNote;
