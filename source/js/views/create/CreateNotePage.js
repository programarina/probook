import React, { Component } from 'react';

import AddNote from '../../components/create/AddNote';
import PreviewNote from '../../components/create/PreviewNote';

class CreateNotePage extends Component {
  constructor() {
    super();
    this.state = {
      noteTitle: 'Note title',
      noteBody: 'Note code',
      noteTags: []
    };
  }

  showNoteData = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  showTags = (tags) => {
    let noteTags = tags.split(' ').filter(tag => tag !== '');
    this.setState({
      noteTags
    });    
  }

  render() {
    const note = this.state;
    return (
      <div>
        <div className='createNote'>
          < AddNote showNoteData={this.showNoteData} showTags={this.showTags} note={note} />
          <PreviewNote note={note} />
        </div>
      </div>
    );
  }
}

export default CreateNotePage;
