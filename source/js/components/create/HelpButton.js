import React, { Component } from 'react';

class HelpButton extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  openModal = () => {
    this.setState({
      showModal: true
    });
  }

  closeModal = () => {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div className='tooltipContainer'>
        <div className='tooltipBox' onClick={this.openModal}>?</div>

        <div className={this.state.showModal ? 'modal showModal' : 'modal'}>
          <div className="modal-content">
            <span
              onClick={this.closeModal}
              className="close">&times;</span>
            <div className='manualBox'>
              <h3>Usage:</h3>
              <h4>You can use GitHub Flavoured Markdown language:</h4>
              <p>For more info go to: <a href='https://github.github.com/gfm/' target='_blank'>GITHUB</a></p>
              <h4>Write some of your own code:</h4>
              <code>```js <br />
                var React = require('react'); <br />
                var Markdown = require('react-markdown'); <br />

                React.render( <br />
                document.getElementById('content') <br />
                ); <br />
                ```</code>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpButton;
