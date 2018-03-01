import React, { Component } from 'react';

class AddNote extends Component {
  constructor() {
    super();
    this.state = {
      noteTags: ''
    };
  }

  handleChange = event => {
    this.props.showNoteData(event);
  }

  handleTags = ({ target, keyCode }) => {
    this.setState({
      noteTags: target.value
    });

    if (keyCode === 32) { 
      this.props.showTags(this.state.noteTags);
    }
  }


  render() {
    const { noteBody, noteTitle, noteTags } = this.props.note;
    return (
      <div className='addNoteContainer'>
        <div className='addNote'>
          <input
            type='text'
            placeholder='title'
            name='noteTitle'
            value={noteTitle}
            onChange={this.handleChange} />
          <textarea
            placeholder='write your code here...'
            name='noteBody'
            value={noteBody}
            onChange={this.handleChange}
          />
          <div className='snippetInputForm'>
            <input
              type='text'
              placeholder='add snippets...'
              name='noteTags'
              value={this.state.noteTags}
              onChange={this.handleTags}
              onKeyDown={this.handleTags}
            />
          </div>
        </div>
        <button onClick={this.handleClick}>Save</button>
      </div>
    );
  }
}

export default AddNote;
