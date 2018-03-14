import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../../components/overview/Search';
import Calendar from '../../components/overview/Calendar';
import OneDay from '../../components/overview/OneDay';
import QucikNote from '../../components/overview/QucikNote';
import AddButton from '../../components/overview/AddButton';
import CalendarButton from '../../components/overview/CalendarButton';
import MobileMenu from '../../components/overview/MobileMenu';
import data from '../../constants/data';
import { getAllNotes } from '../../actions/note';

class OverviewPage extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      filterNotes: [],
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
    // fetch list of notes from api'
    this.props.getAllNotes();
    this.setState({
      notes: data.items,
      filterNotes: data.items
    });
  }

  findNote = (searchString) => {
    let allNotes = this.state.notes;
    let filterNotes = [];

    filterNotes = allNotes.filter(note => {
      if (note.title.toLowerCase().includes(searchString.toLowerCase())) {
        return note;
      }
    });
    this.setState({
      filterNotes
    });
  }

  filterByMonth = (selectedMonth) => {
    let allNotes = this.state.notes;
    let filterNotes = allNotes.filter(note => {
      let month = new Date(note.dateCreated);
      if (selectedMonth === month.getMonth()) {
        return note;
      }
    });
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
          <CalendarButton toggleClass={this.toggleClass} showCalendar={showCalendar} />
          <div className='searchContainer'>
            <Search searchTerm={this.findNote} />
            <QucikNote />
          </div>
          <MobileMenu />
        </div>
        <div className='mainDataContainer'>
          <Calendar showCalendar={showCalendar} filterByMonth={this.filterByMonth} />
          <section className='allNotes'>
            <OneDay notes={filterNotes} />
            <AddButton />
          </section>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { getAllNotes: () => dispatch(getAllNotes()) };
};

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
