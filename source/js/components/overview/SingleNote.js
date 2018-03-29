import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { routeCodes } from '../../constants/routes';
import { deleteNote } from '../../actions/deleteNote';
import ReactMarkdown from 'react-markdown';
import { redirectionService } from '../../services/redirectionService';

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
    const { id } = this.props.note;
    this.props.deleteNote(id);
    this.closeModal();
    // redirectionService.redirect(routeCodes.HOME);

  }

  render() {
    const { title, body, id, tags } = this.props.note;
    return (
      <div className={this.props.gridView ? 'singleNote gridView' : 'singleNote'}>
        <h4>{title ? title.length < 20 ? title : `${title.substring(0, 20)}...` : 'Note title'}</h4>
        <div><ReactMarkdown source={body.length < 50 ? body : `${body.substring(0, 150)}...`} /></div>
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
          {tags.length !== 0 ? tags.map(tag => <li key={tag}>{tag}</li>) : 'Note tags'}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteNote: id => dispatch(deleteNote(id)),
  }
}

export default connect(null, mapDispatchToProps)(SingleNote);
