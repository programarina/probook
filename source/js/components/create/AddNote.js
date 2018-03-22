import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions/createNote';
import { routeCodes } from '../../constants/routes';
import { redirectionService } from '../../services/redirectionService';

class AddNote extends Component {
  constructor() {
    super();
    this.state = {
      tags: ''
    };
  }

  handleChange = event => {
    this.props.showNoteData(event);
  }

  handleTags = ({ target, keyCode }) => {
    this.setState({
      tags: target.value
    });

    if (keyCode === 32) {
      this.props.showTags(this.state.tags);
      this.setState({ tags: '' });
    }
  }

  handleClick = () => {
    const { body, title, tags } = this.props.note;
    const date = new Date();

    const note = {
      title,
      body,
      tags,
      userId: this.props.user.id,
      dateCreated: date.toDateString()
    }
    if (note.title && note.body && note.tags) {
      this.props.createNote(note);
    }
  }

  render() {
    const { body, title, tags } = this.props.note;
    return (
      <div className='addNoteContainer'>
        <div className='addNote'>
          <input
            type='text'
            placeholder='title'
            name='title'
            value={title}
            onChange={this.handleChange} />
          <textarea
            placeholder='write your code here...'
            name='body'
            value={body}
            onChange={this.handleChange}
          />
          <div className='snippetInputForm'>
            <input
              type='text'
              placeholder='add snippets...'
              name='tags'
              value={this.state.tags}
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


function mapDispatchToProps(dispatch) {
  return {
    createNote: note => { dispatch(createNote(note)) }
  }
};

function mapStateToProps(state) {
  return {
    notes: state.notes.get('notes'),
    user: state.user.get('user')
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
