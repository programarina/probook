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
import { getAllNotes } from '../../actions/getNotes';

class OverviewPage extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      filterNotes: [],
      showCalendar: false,
      serverError: null
    }
  };

  componentDidMount() {
    this.showAllNotes();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notes !== this.props.notes) {
      this.setState({
        notes: nextProps.notes,
        filterNotes: nextProps.notes,
      });
    }
    if (nextProps.error !== this.props.error) {
      this.setState({
        serverError: nextProps.error
      });
    }
  }

  toggleClass = () => {
    const currentState = this.state.showCalendar;
    this.setState({ showCalendar: !currentState });
    if (currentState) {
      this.setState({
        filterNotes: this.state.notes
      });
    }
  }

  showAllNotes = () => {
    this.props.getAllNotes();
  }

  findNote = (searchString) => {
    let allNotes = this.state.notes;

    let filterNotes = allNotes.filter(note => {
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
    const { filterNotes, showCalendar, serverError } = this.state;
    if (!filterNotes) {
      return <img
        src='../../../../assets/img/loader.gif'
        alt='loader'
        className='loader'
      />;
    }
    if(serverError){
      return <p>{serverError.error}</p>;
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
      </div >
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { getAllNotes: () => dispatch(getAllNotes()) };
};

function mapStateToProps(state) {
  return {
    notes: state.notes.get('notes'),
    error: state.notes.get('error')
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
