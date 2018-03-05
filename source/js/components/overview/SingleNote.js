import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
        <h4>{`${this.props.note.title.substring(0,100)}...`}</h4>
        <p>{`${this.props.note.body.substring(0,250)}...`}</p>
        <Link
          to='create'
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
        <ul className='snippetTags'>
          {this.props.note.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    note: state.note
  }
}

export default connect(mapStateToProps)(SingleNote);