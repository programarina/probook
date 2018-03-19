import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class PreviewNote extends Component {
  render() {
    const { body, title, tags } = this.props.note;
    return (
      <div className='previewCodeContainer'>
        <div className='previewCode'>
          <h3>{title}</h3>
          <ReactMarkdown source={body} />
        </div>
        <ul className='previewTags'>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </div>
    );
  }
}

export default PreviewNote;
