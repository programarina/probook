import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../../components/overview/Search';
import Calendar from '../../components/overview/Calendar';
import OneDay from '../../components/overview/OneDay';
import QucikNote from '../../components/overview/QucikNote';
import AddButton from '../../components/overview/AddButton';
import CalendarButton from '../../components/overview/CalendarButton';
import MobileMenu from '../../components/overview/MobileMenu';
import { getAllNotes } from '../../actions/getNotes';

class OverviewPage extends Component {
  constructor() {
    super();
    this.state = {
      loader: false,
      notes: [],
      filterNotes: [],
      showCalendar: false,
      serverError: '',
      gridView: true,
      pageNum: 2,
      lastArray: false,
    }
  };

  toggleClass = () => {
    const currentState = this.state.showCalendar;
    this.setState({ showCalendar: !currentState });
    // when closing calendar
    if (currentState) {
      this.showAllNotes();
    }
  }

  componentDidMount() {
    if (!this.props.notes.length) {
      this.props.getAllNotes(1, 6);
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    let documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
      document.documentElement.clientHeight, document.documentElement.scrollHeight,
      document.documentElement.offsetHeight);
    let yOffset = window.pageYOffset;
    let windowHeight = window.innerHeight;

    if (yOffset === documentHeight - windowHeight) {
      this.props.getAllNotes(this.state.pageNum, 3);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { lastArray } = this.state;
    if (lastArray) {
      return window.removeEventListener('scroll', this.handleScroll);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { pageNum } = this.state;
    if (nextProps.loader !== this.props.loader) {
      this.setState({
        loader: nextProps.loader
      });
    }
    if (nextProps.notes !== this.props.notes) {
      if (nextProps.notes.length === this.state.notes.length) {
        this.setState({
          lastArray: true,
        });
      }
      this.setState({
        notes: nextProps.notes,
        filterNotes: nextProps.notes,
        pageNum: pageNum + 1
      });
    }
    if (nextProps.error !== this.props.error) {
      this.setState({
        serverError: nextProps.error.message
      });
    }
  }


  findNote = (searchString) => {
    let allNotes = this.state.notes;

    let filterNotes = allNotes.filter(note => {
      let noteTags = note.tags.some(tag => {
        return tag.toLowerCase().includes(searchString.toLowerCase());
      });

      if (noteTags) {
        return note;
      }
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

  toggleView = () => {
    let currentState = this.state.gridView;
    this.setState({
      gridView: !currentState
    });
  }

  showAllNotes = () => {
    const { notes } = this.state;
    this.setState({
      filterNotes: notes
    });
  }
 
  render() {
    const { filterNotes, showCalendar, serverError, loader, gridView, lastArray } = this.state;
    if (serverError) {
      return <p className='serverErrorMainPage'>{serverError}</p>;
    }
    return (
      <div className='main'>
        <div>
          <CalendarButton toggleClass={this.toggleClass} showCalendar={showCalendar} />
          <div className='searchContainer'>
            <Search searchTerm={this.findNote} />
            <QucikNote />
          </div>
          <MobileMenu filterByMonth={this.filterByMonth} showAllNotes={this.showAllNotes} />
        </div>
        <div className='mainDataContainer'>
          <Calendar showCalendar={showCalendar} filterByMonth={this.filterByMonth} />
          <section className='allNotes'>
            <button
              className='noteGrid'
              onClick={this.toggleView}>
              <img src={`../../../assets/img/${gridView ? 'listIco' : 'gridIco'}.png`} width='30px' height='30px' />
            </button>
            <OneDay
              notes={loader ? filterNotes : (lastArray ? filterNotes : filterNotes.slice(0, filterNotes.length - 3))}
              gridView={gridView} />
            {loader ? <img
              src='../../../../assets/img/loader.gif'
              alt='loader'
              className='loader'
            /> : ''}
            <AddButton />
          </section>
        </div>
      </div >
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { getAllNotes: (pageNum, notesPerPage) => dispatch(getAllNotes(pageNum, notesPerPage)) };
};

function mapStateToProps(state) {
  return {
    loader: state.notes.get('loading'),
    notes: state.notes.get('notes'),
    error: state.notes.get('error')
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
