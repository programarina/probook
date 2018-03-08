import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {routeCodes} from '../../constants/routes';

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

  render() {
    return (
      <div className='singleNote'>
        <h4>{`${this.props.note.title}`}</h4>
        <p>{`${this.props.note.body.substring(0,150)}...`}</p>
        <Link
          to={`${routeCodes.CREATE_PAGE}/${this.props.note.id}`}
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
            <button className='deleteModalBtn'>Delete</button>
          </div>
        </div>
        {/* <ul className='snippetTags'>
          {this.props.note.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul> */}
      </div>
    );
  }
}

export default SingleNote;
