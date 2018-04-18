import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LIST_OF_MONTHS } from '../../constants/months';

export default class MobileMenu extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      checkedMonth: ''
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

  showAllNotes = () => {
    this.props.showAllNotes();
    this.closeModal();
  }

  render() {
    const months = LIST_OF_MONTHS;
    return (
      <div className='mobileMenuContainer'>
        <div
          className='mobileCalendarView'
          onClick={this.openModal}>
          calendar
        </div>
        <div
          className={this.state.showModal ? 'modal showModal' : 'modal'}>
          <div className="months-list">
            <span
              onClick={this.closeModal}
              className="close">&times;
            </span>
            <ul>
              {months.map((month, indexOfMonth) =>
                <li key={month}>
                  <button
                    onClick={() => {
                      this.closeModal()
                      this.props.filterByMonth(indexOfMonth)
                    }}>
                    {month}
                  </button>
                </li>)}
              <li>
                <button onClick={this.showAllNotes}>All notes</button>
              </li>
            </ul>
          </div>
        </div>
        <Link to='/create' className='mobileAddBtnView'><div>add</div></Link>
      </div>
    );
  };
}
