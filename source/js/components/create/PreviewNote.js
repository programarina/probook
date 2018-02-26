import React, { Component } from 'react';

class PreviewNote extends Component {
  render() {
    const { noteBody, noteTitle, noteTags } = this.props.note;
    return (
      <div className='previewCodeContainer'>
        <div className='previewCode'>
          <h3>{noteTitle}</h3>
          <p>{noteBody}</p>
        </div>
        <ul className='previewTags'>{ noteTags.map(tag=><li key={tag}>{tag}</li> ) }</ul>
      </div>
    );
  }
}

export default PreviewNote;
