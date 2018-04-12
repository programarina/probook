import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createNote } from '../../actions/createNote';
import { routeCodes } from '../../constants/routes';
import { updateNote } from '../../actions/updateNote';
import { getAllNotes } from '../../actions/getNotes';

class AddNote extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      tags: '',
      loader: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loader !== this.props.loader) {
      this.setState({
        loader: nextProps.loader
      });
    }
    if (nextProps.newNote !== this.props.newNote && !nextProps.loader) {
      this.props.history.push(routeCodes.HOME, null);
    }
    if (nextProps.notes !== this.props.notes && !nextProps.loader) {
      this.props.history.push(routeCodes.HOME, null);
    }
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
    const {
      note: {
        body,
        title,
        tags
      },
      user: {
        id
      },
      dispatch
    } = this.props;

    const date = new Date();
    const note = {
      title,
      body,
      tags,
      userId: id,
      dateCreated: date.toDateString(),
    }
    if (note.title && note.body && note.tags) {
      if (note.body.substring(0, 3) === '```') {
        try {
          eval(note.body.substring(3, note.body.length - 3));
          if (this.props.note.id) {
            this.props.updateNote(note, this.props.note.id);
          } else {
            this.props.createNote(note);
            // this.props.getAllNotes(1, 6);
          }
        }
        catch (error) {
          // alert('Bad code.');
        }
      } else {
        if (this.props.note.id) {
          this.props.updateNote(note, this.props.note.id);
        } else {
          this.props.createNote(note);
          // this.props.getAllNotes(1, 6);
        }
      }
    }
  }

  render() {
    const { body, title, tags } = this.props.note;
    const { loader } = this.state;
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
        {loader
          ? <img
            src='../../../../assets/img/loader.gif'
            alt='loader'
            className='loader'
          />
          : <button onClick={this.handleClick}>Save</button>}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createNote: note => { dispatch(createNote(note)) },
    getAllNotes: (pageNum, numOfNotes) => { dispatch(getAllNotes(pageNum, numOfNotes)) },
    updateNote: (note, noteId) => { dispatch(updateNote(note, noteId)) },
  }
};

function mapStateToProps(state) {
  return {
    newNote: state.notes.get('newNote'),
    user: state.user.get('user'),
    loader: state.notes.get('loading'),
    notes: state.notes.get('notes'),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
