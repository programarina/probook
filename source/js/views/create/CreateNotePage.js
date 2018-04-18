import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddNote from '../../components/create/AddNote';
import PreviewNote from '../../components/create/PreviewNote';
import HelpButton from '../../components/create/HelpButton';
import { publicPath } from '../../constants/routes';
import { getSingleNote } from '../../actions/getSingleNote';

class CreateNotePage extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      tags: [],
      id: '',
      loader: false,
      dateCreated: '',
      dateModified:'',
    };
  }

  componentWillMount() {
    const noteId = this.props.match.params.id;
    if (noteId) {
      this.props.getSingleNote(noteId);
    }
  }

  componentWillReceiveProps(nextProps) {
    const noteId = this.props.match.params.id;

    if (this.props.loader !== nextProps.loader) {
      this.setState({
        loader: nextProps.loader
      });
    }

    if (this.props.singleNote !== nextProps.singleNote && noteId && !nextProps.loader) {
      this.setState({
        title: nextProps.singleNote.title,
        body: nextProps.singleNote.body,
        tags: nextProps.singleNote.tags,
        id: nextProps.singleNote.id,
        dateModified: nextProps.singleNote.dateModified,
        dateCreated: nextProps.singleNote.dateCreated
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

  deleteTag = (selectedTag) => {
    let tags = this.state.tags.filter(tag => tag !== selectedTag);
    this.setState({
      tags
    });
  }

  render() {
    const note = this.state;
    const { loader } = this.state;
    if (loader && !note.title) {
      return (
        <img
          src='../../../../assets/img/loader.gif'
          alt='loader'
          className='loader'
        />
      );
    }
    return (
      <div>
        <div className='backBtnContainer'>
          <Link to={publicPath}>
            <svg height="40" width="40">
              <polyline 
                points="20,0 4,20 20,40"
                fill='transparent' 
                stroke='white' 
                strokeWidth='4' />
            </svg>
          </Link>
        </div>
        <div className='createNote'>
          <AddNote 
            history={this.props.history} 
            showNoteData={this.showNoteData} 
            showTags={this.showTags} 
            note={note} />
          <PreviewNote 
            note={note} 
            deleteTag={this.deleteTag} />
          <HelpButton />
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getSingleNote: id => dispatch(getSingleNote(id))
  }
}

function mapStateToProps(state) {
  return {
    singleNote: state.notes.get('currentNote'),
    loader: state.notes.get('loading'),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNotePage);
