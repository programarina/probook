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
import { resetAllNotes } from '../../actions/resetAllNotes';

class OverviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      notes: this.props.notes,
      filterNotes: this.props.notes,
      showCalendar: false,
      serverError: '',
      gridView: true,
      sortByDateModified: false
    }
  };

  toggleClass = () => {
    const currentState = this.state.showCalendar;
    this.setState({ showCalendar: !currentState });
    // when closing calendar show all notes
    if (currentState) {
      this.showAllNotes();
    }
  }

  toggleNotesSorting = () => {
    const currentState = this.state.sortByDateModified;
    this.setState({
      sortByDateModified: !currentState,
    });
    this.props.resetAllNotes();
  }

  componentDidMount() {
    const { sortByDateModified } = this.state;
    if (!this.state.notes.length) {
      this.props.getAllNotes(1, 6, sortByDateModified ? 'dateModified' : 'dateCreated');
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    const { loader, sortByDateModified } = this.state;
    
    let documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
      document.documentElement.clientHeight, document.documentElement.scrollHeight,
      document.documentElement.offsetHeight);
    let yOffset = window.pageYOffset;
    let windowHeight = window.innerHeight;

    if (yOffset === documentHeight - windowHeight && !loader) {
      this.props.getAllNotes(this.props.pageNum, 3, sortByDateModified ? 'dateModified' : 'dateCreated');
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.sortByDateModified !== nextState.sortByDateModified) {
      this.props.getAllNotes(1, 6, nextState.sortByDateModified ? 'dateModified' : 'dateCreated');
    }
  }

  componentWillReceiveProps(nextProps) {
    const { sortByDateModified } = this.state;

    if (nextProps.loader !== this.props.loader) {
      this.setState({
        loader: nextProps.loader
      });
    }
    if (nextProps.notes !== this.props.notes && !nextProps.loader) {
      this.setState({
        notes: nextProps.notes,
        filterNotes: nextProps.notes
      });
    }
    if (nextProps.error !== this.props.error) {
      this.setState({
        serverError: nextProps.error.message
      });
    }
    if (this.props.newNote !== nextProps.newNote) {
      if (nextProps.newNote) {
        this.props.getAllNotes(1, 6, sortByDateModified ? 'dateModified' : 'dateCreated');
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { lastArray } = this.props;
    if (lastArray) {
      return window.removeEventListener('scroll', this.handleScroll);
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  findNote = (searchString) => {
    let allNotes = this.state.notes;
    let filterNotes = allNotes.filter(note => {
      let noteTags = note.tags.some(tag => {
        return tag.toLowerCase().includes(searchString.toLowerCase());
      });
      if (noteTags) return note;
    });
    // show all notes when search string is empty
    if (searchString === '') {
      filterNotes = this.state.notes;
    }
    this.setState({
      filterNotes
    });
  }

  filterByMonth = (selectedMonth) => {
    let allNotes = this.state.notes;
    let filterNotes = allNotes.filter(note => {
      let month = new Date(note.dateCreated);
      if (selectedMonth === month.getMonth()) return note;
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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { filterNotes, notes, showCalendar, serverError, loader, gridView, sortByDateModified } = this.state;
    const { lastArray } = this.props;
    // transform from time stamp to human readable date
    const showNotes = filterNotes.map(note => {
      let dateCreated = new Date(parseInt(note.dateCreated));
      let dateModified = new Date(parseInt(note.dateModified));
      return {
        ...note,
        dateCreated: dateCreated.toDateString(),
        dateModified: dateModified.toDateString(),
      };
    });
    if (serverError) {
      return (
        <div>
          <p className='serverErrorMainPage'>{serverError}</p>
          <button className='reloadPage' onClick={() => { location.reload() }} >Try again</button>
        </div>);
    }
    return (
      <div className='main'>
        <div>
          <CalendarButton
            toggleClass={this.toggleClass}
            showCalendar={showCalendar} />
          <div className='searchContainer'>
            <Search
              searchTerm={this.findNote} />
            <QucikNote />
          </div>
          <MobileMenu
            filterByMonth={this.filterByMonth}
            showAllNotes={this.showAllNotes} />
        </div>
        <div className='mainDataContainer'>
          <Calendar
            showCalendar={showCalendar}
            filterByMonth={this.filterByMonth} />
          <section className='allNotes'>
            <button
              className='noteGrid'
              onClick={this.toggleView}>
              <img
                src={`../../../assets/img/${gridView ? 'listIco' : 'gridIco'}.png`}
                width='30px'
                height='30px' />
            </button>
            <button
              onClick={this.toggleNotesSorting}
              className='sortNotes'>
              {sortByDateModified
                ? 'Sort by date created'
                : 'Sort by last modified'}
            </button>
            <OneDay
              notes={loader 
                ? showNotes 
                : ((lastArray || showNotes.length === 3) ? showNotes : showNotes.slice(0, showNotes.length - 3))}
              gridView={gridView}
              sortBy={sortByDateModified} />
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
  return {
    getAllNotes: (pageNum, notesPerPage, sortBy) => dispatch(getAllNotes(pageNum, notesPerPage, sortBy)),
    resetAllNotes: _ => dispatch(resetAllNotes()),
  };
};

function mapStateToProps(state) {
  return {
    loader: state.notes.get('loading'),
    notes: state.notes.get('notes'),
    error: state.notes.get('error'),
    pageNum: state.notes.get('pageNum'),
    lastArray: state.notes.get('lastArray'),
    newNote: state.notes.get('newNote'),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
