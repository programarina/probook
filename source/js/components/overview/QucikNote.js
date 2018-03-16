import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from 'actions/createNote';

function mapDispatchToProps(dispatch) {
  return { createNote: note => dispatch(createNote(note)) };
};

class QuickNote extends Component {
  constructor() {
    super();
    this.state = {
      quickNote: ''
    };
  }

  handleClick = () => {
    const note = {
      title: '',
      body: this.state.quickNote,
      tags: [],
      dateCreate: '',

    };
    this.props.createNote(note);
  }

  render() {
    return (
      <section className='quickNote'>
        <textarea
          placeholder='Quick note...'
          value={this.state.quickNote}
          onChange={({ target }) => this.setState({ quickNote: target.value })} />
        <button onClick={this.handleClick}>Add</button>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    createNote: note => dispatch(createNote(note))
  };
}


export default connect(null, mapDispatchToProps)(QuickNote);
