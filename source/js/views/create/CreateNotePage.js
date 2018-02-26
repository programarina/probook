import React, { Component } from 'react';

import AddNote from '../../components/create/AddNote';
import PreviewNote from '../../components/create/PreviewNote';
import Header from '../../components/common/Header';

class CreateNotePage extends Component {
  constructor() {
    super();
    this.state = {
      noteTitle: '',
      noteBody: '',
      noteTags: ''
    };
  }

  showTitle = (noteTitle) => {
    this.setState({
      noteTitle
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className='createNote'>
          < AddNote showTitle={ this.showTitle } title={ this.state.noteTitle } />
          <PreviewNote title={ this.state.noteTitle } />
        </div>
      </div>
    );
  }
}

export default CreateNotePage;
