import React, { Component } from 'react';

import Search from '../../components/overview/Search';
import Filter from '../../components/overview/Filter';
import OneDay from '../../components/overview/OneDay';
import QucikNote from '../../components/overview/QucikNote';
import AddButton from '../../components/overview/AddButton';
import FilterButton from '../../components/overview/FilterButton';
import MobileMenu from '../../components/overview/MobileMenu';

class OverviewPage extends Component {
  constructor() {
    super();
    this.state = {
      showCalendar: false
    }
  };

  toggleClass = () => {
    const currentState = this.state.showCalendar;
    this.setState({ showCalendar: !currentState });
  }

  render() {
    return (
      <div className='main'>
        <div>
          <FilterButton toggleClass={this.toggleClass} showCalendar={this.state.showCalendar} />
          <div className='searchContainer'>
            <Search />
            <QucikNote />
          </div>
          <MobileMenu/>
        </div>
        <div className='mainDataContainer'>
          <Filter showCalendar={this.state.showCalendar} />
          <section className='allNotes'>
            <OneDay />
            <OneDay />
            <AddButton />
          </section>
        </div>
      </div>
    );
  }
}

export default OverviewPage;
