import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AddNote from '../../components/create/AddNote';
import PreviewNote from '../../components/create/PreviewNote';
import HelpButton from '../../components/create/HelpButton';
import { publicPath } from '../../constants/routes';


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
        <div className='backBtnContainer'>
          <Link to={publicPath}>
            <svg height="40" width="40">
              <polyline  points="20,0 4,20 20,40"
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

export default CreateNotePage;
