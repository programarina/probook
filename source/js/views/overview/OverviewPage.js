import React, { Component } from 'react';

import Search from '../../components/overview/Search';
import Filter from '../../components/overview/Filter';
import OneDay from '../../components/overview/OneDay';
import QucikNote from '../../components/overview/QucikNote';
import AddButton from '../../components/overview/AddButton';
import FilterButton from '../../components/overview/FilterButton';
import MobileMenu from '../../components/overview/MobileMenu';
import data from '../../constants/data';

class OverviewPage extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      filterNotes:[],
      showCalendar: false
    }
  };
  componentDidMount() {
    this.showAllNotes();
  }

  toggleClass = () => {
    const currentState = this.state.showCalendar;
    this.setState({ showCalendar: !currentState });
  }

  showAllNotes = () => {
    // fetch list of notes from api
    this.setState({
      notes: data.items,
      filterNotes: data.items
    });
  }

  findNote = (searchString) => {
    let allNotes = this.state.notes;
    let filterNotes = [];

    if (searchString === '') {
      this.showAllNotes();
      return null;
    }

    filterNotes = allNotes.filter(note => {
      if (note.title.toLowerCase().includes(searchString.toLowerCase())) {
        return note;
      }
    });
    console.log(filterNotes);
    console.log(allNotes);
    this.setState({
      filterNotes
    });
  }

  render() {
    const { filterNotes, showCalendar } = this.state;

    if (!filterNotes) {
      return <p>loading</p>;
    }
    return (
      <div className='main'>
        <div>
          <FilterButton toggleClass={this.toggleClass} showCalendar={showCalendar} />
          <div className='searchContainer'>
            <Search searchTerm={this.findNote} />
            <QucikNote />
          </div>
          <MobileMenu />
        </div>
        <div className='mainDataContainer'>
          <Filter showCalendar={showCalendar} />
          <section className='allNotes'>
            <OneDay notes={filterNotes} />
            <AddButton />
          </section>
        </div>
      </div>
    );
  }
}

export default OverviewPage;
