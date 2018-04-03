import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions/createNote';
import { routeCodes } from '../../constants/routes';
import { updateNote } from '../../actions/updateNote';

class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: '',
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
      dateCreated: date.toDateString(),
      badCode: false
    }
    this.evaluateCode(note.body);
    if (note.title && note.body && note.tags) {
      if (this.props.note.id) {
        this.props.updateNote(note, this.props.note.id);
      } else {
        this.props.createNote(note);
      }
    }
  }

  evaluateCode = (code) => {

    if (code.substring(0, 3) === '```') {
      try {
        eval(code.substring(3, code.length - 3));
        this.props.history.push(routeCodes.HOME, null);
      }
      catch (error) {
        alert('Bad code.');
      }
    } else {
      this.props.history.push(routeCodes.HOME, null);
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
    createNote: note => { dispatch(createNote(note)) },
    updateNote: (note, noteId) => { dispatch(updateNote(note, noteId)) }
  }
};

function mapStateToProps(state) {
  return {
    notes: state.notes.get('notes'),
    user: state.user.get('user')
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
