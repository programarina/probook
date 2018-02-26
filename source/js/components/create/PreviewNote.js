import React, { Component } from 'react';

class PreviewNote extends Component {
  render() {
    return (
      <div className='previewCodeContainer'>
        <div className='previewCode'>
          <h3>{this.props.title}</h3>
          <p>some text</p>
          <p>tags</p>
        </div>
      </div >
    );
  }
}

export default PreviewNote;
