import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions/createNote';
import { routeCodes } from '../../constants/routes';
import { redirectionService } from '../../services/redirectionService';

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

  handleClick = () => {
    const { noteBody, noteTitle, noteTags } = this.props.note;
    const date = new Date();

    const note = {
      noteTitle: noteTitle,
      noteBody: noteBody,
      noteTags: noteTags,
      dateCreated: date.toDateString()
    }
    this.props.createNote(note);
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.notes);
    if(this.props.notes !== nextProps.notes){
      redirectionService.redirect(routeCodes.HOME);
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


function mapDispatchToProps(dispatch) {
  return {
    createNote: note => { dispatch(createNote(note)) }
  }
};

function mapStateToProps(state) {
  return {
    notes: state.notes.get('notes')
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
