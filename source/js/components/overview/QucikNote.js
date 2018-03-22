import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../../actions/createNote';

class QuickNote extends Component {
  constructor() {
    super();
    this.state = {
      quickNote: ''
    };
  }

  handleClick = () => {
    const date = new Date();
    const note = {
      title: '',
      body: this.state.quickNote,
      tags: [],
      userId: this.props.user.id,
      dateCreate: date.toDateString(),
    };
    
    if(!note.body){
      return;
    }
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

function mapStateToProps(state){
  return{
    user: state.user.get('user')
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuickNote);
