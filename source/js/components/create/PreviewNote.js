import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class PreviewNote extends Component {
  render() {
    const { body, title, tags } = this.props.note;
    return (
      <div className='previewCodeContainer'>
        <div className='previewCodeTitle'>
          <h4>{title}</h4>
        </div>
        <div className='previewCode'>
          <ReactMarkdown className='javaScript' source={body} />
        </div>
        <ul className='previewTags'>{tags.map(tag => <li key={tag} onClick={() => { this.props.deleteTag(tag) }}>{tag}</li>)}</ul>
      </div>
    );
  }
}

export default PreviewNote;
