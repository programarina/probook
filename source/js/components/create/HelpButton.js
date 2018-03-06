import React, { Component } from 'react';

class HelpButton extends Component {
  constructor(){
    super();
    this.state = {
      showModal: false
    };
  }
  openModal = ()=>{
    this.setState({
      showModal:true
    });
  }
  closeModal = ()=>{
    this.setState({
      showModal:false
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
            <p>modal text</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HelpButton;
