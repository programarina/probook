import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddNote from '../../components/create/AddNote';
import PreviewNote from '../../components/create/PreviewNote';
import HelpButton from '../../components/create/HelpButton';
import { publicPath } from '../../constants/routes';
import { getAllNotes } from '../../actions/getNotes';

class CreateNotePage extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      tags: [],
      id: ''
    };
  }

  componentWillMount() {
    const noteId = this.props.match.params.id;
    if (!this.props.notes && noteId) {
      this.props.getAllNotes();
    }
  }

  componentWillReceiveProps(nextProps) {
    var noteId = this.props.match.params.id;
    if (this.props.notes !== nextProps.notes) {
      if (noteId) {
        var arr = nextProps.notes.filter(note => {
          if (parseInt(noteId) === note.id) {
            return note;
          }
        });
        var singleNote = arr[0];
      }
    }
    this.setState({
      title: singleNote.title,
      body: singleNote.body,
      tags: singleNote.tags,
      id: singleNote.id,
    })
  }

  componentDidMount() {
    var noteId = this.props.match.params.id;
    if (noteId && this.props.notes) {
      var arr = this.props.notes.filter(note => {
        if (note.id === parseInt(noteId)) {
          return note;
        }
      });
      var singleNote = arr[0];
      this.setState({
        title: singleNote.title,
        body: singleNote.body,
        tags: singleNote.tags,
        id: singleNote.id
      });
    }
  }

  showNoteData = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  showTags = (tags) => {
    let noteTagsArr = tags.split(' ').filter(tag => tag !== '');
    this.setState({
      tags: [...this.state.tags, ...noteTagsArr]
    });
  }

  render() {
    const note = this.state;
    return (
      <div>
        <div className='backBtnContainer'>
          <Link to={publicPath}>
            <svg height="40" width="40">
              <polyline points="20,0 4,20 20,40"
                fill='transparent' stroke='white' strokeWidth='4' />
            </svg>
          </Link>
        </div>
        <div className='createNote'>
          < AddNote showNoteData={this.showNoteData} showTags={this.showTags} note={note} />
          <PreviewNote note={note} />
          <HelpButton />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllNotes: () => dispatch(getAllNotes())
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes.get('notes')
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNotePage);
