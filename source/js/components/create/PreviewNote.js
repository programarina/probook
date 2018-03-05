import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class PreviewNote extends Component {
  render() {
    const { noteBody, noteTitle, noteTags } = this.props.note;
    return (
      <div className='previewCodeContainer'>
        <div className='previewCode'>
          <h3>{noteTitle}</h3>
          <ReactMarkdown source={noteBody} className='markDownContainer' />
        </div>
        <ul className='previewTags'>{noteTags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </div>
    );
  }
}

export default PreviewNote;
