import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LIST_OF_MONTHS } from '../../constants/months';

export default class MobileMenu extends Component {
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
    const months = LIST_OF_MONTHS;
    return (
      <div className='mobileMenuContainer'>
        <div className='mobileCalendarView' onClick={this.openModal}>calendar</div>
        <div
          className={this.state.showModal ? 'modal showModal' : 'modal'}>
          <div className="months-list">
            <span
              onClick={this.closeModal}
              className="close">&times;
            </span>
            <ul>
              {months.map(month => <li key={month}>{month}</li>)}
            </ul>
          </div>
        </div>
        <Link to='/create' className='mobileAddBtnView'><div>add</div></Link>
      </div>
    );
  };
}