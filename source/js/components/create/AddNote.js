import React, { Component } from 'react';

class AddNote extends Component {

  handleChange = event => {
    this.props.showTitle(event.target.value);scrollBy
  }

  render() {
    return (
      <div className='addNoteContainer'>
        <div className='addNote'>
          <input
            type='text'
            placeholder='title'
            value={this.props.title}
            onChange={this.handleChange} />
          <textarea placeholder='write your code here...' />
          <div className='snippetInputForm'>
            <input type='text' placeholder='add snippets...' />
            <button>Add</button>
          </div>
        </div>
        <button onClick={this.handleClick}>Save</button>
      </div>
    );
  }
}

export default AddNote;
