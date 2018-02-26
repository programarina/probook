import React, { Component } from 'react';

import Search from '../../components/main/Search';
import Filter from '../../components/main/Filter';
import SingleNote from '../../components/main/SingleNote';
import Header from '../../components/common/Header';
import QucikNote from '../../components/main/QucikNote';


class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      showCalendar: false
    }
  };
  render() {
    const arr = [1, 2, 3, 4];
    return (
      <div className='mainPageContainer'>
        <Header />
        <div className='main'>
          <div>
            <div className='calendarBtnContainer'>
              <svg height="40" width="40" className="calendarBtn" onClick={() => this.setState({ showCalendar: true })}>
                <polyline points="20,0 36,20, 20,40"
                  fill='transparent' stroke='white' strokeWidth='4' />
              </svg>
              <svg height="40" width="40" className="calendarBtn" onClick={() => this.setState({ showCalendar: true })}>
                <polyline points="2,10,20,38, 40,10" stroke="white" strokeWidth="4" fill="none"/>
              </svg>
            </div>
            <div className='searchContainer'>
              <Search />
              <QucikNote />
            </div>
          </div>
          <div className='mainDataContainer'>
            <Filter showCalendar={this.state.showCalendar} />
            <section className='allNotes'>
              <div className='oneDay'>
                <h3>Today</h3>
                {arr.map(note => <SingleNote note={note} key={note} />)}
              </div>
              <div className='oneDay'>
                <h3>Yesterday</h3>
                {arr.map(note => <SingleNote note={note} key={note} />)}
              </div>
              <svg width='100' height='100' className='addNoteBtn'>
                <defs>
                  <defs>
                    <filter id='dropshadow' x='-40%' y='-40%' width='180%' height='180%' filterUnits='userSpaceOnUse'>
                      <feGaussianBlur in='SourceAlpha' stdDeviation='3' />
                      <feOffset dx='5' dy='5' result='offsetblur' />
                      <feOffset dx='-5' dy='-5' result='offsetblur' />
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in='SourceGraphic' />
                        <feMergeNode in='SourceGraphic' />
                      </feMerge>
                    </filter>
                  </defs>
                </defs>
                <circle cx='50' cy='50' r='40' filter='url(#dropshadow)' id='desktopCircle' />
                {/* <circle cx='50' cy='50' r='25' filter='url(#dropshadow)' id='mobileCircle' /> */}
                <text x='50%' y='50%' textAnchor='middle' strokeWidth='2px' dy='0.3em'>+</text>
              </svg>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
