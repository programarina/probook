import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { routeCodes } from '../../constants/routes';
import { deleteNote } from '../../actions/deleteNote';
import { getAllNotes } from '../../actions/getNotes';

class SingleNote extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  showModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  deleteNote = () => {
    let id = this.props.note.id;
    this.props.deleteNote(id);
    this.closeModal();
  }

  render() {
    const { title, body, id, tags } = this.props.note;
    return (
      <div className='singleNote'>
        <h4>{`${title.substring(0, 20)}...`}</h4>
        <p>{`${body.substring(0, 150)}...`}</p>
        <Link
          to={`${routeCodes.CREATE_PAGE}/${id}`}
          className='editBtn'>
          <img
            src='../../../assets/img/editBtn.png'
            alt='edit button'
            width='20px' />
        </Link>
        <button
          onClick={this.showModal}
          className='deleteNoteBtn'>&times;
        </button>
        <div
          className={this.state.showModal ? 'modal showModal' : 'modal'}>
          <div className="modal-content">
            <span
              onClick={this.closeModal}
              className="close">&times;</span>
            <p>Are you sure you want to delete?</p>
            <button className='cancelModalBtn' onClick={this.closeModal}>Cancel</button>
            <button className='deleteModalBtn' onClick={this.deleteNote}>Delete</button>
          </div>
        </div>
        <ul className='snippetTags'>
          {tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteNote: id => dispatch(deleteNote(id)),
    getAllNotes: () => dispatch(getAllNotes()),
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes.get('notes')
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleNote);
