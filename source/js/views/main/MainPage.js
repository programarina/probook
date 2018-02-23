import React, { Component } from 'react';

import Search from '../../components/main/Search';
import Filter from '../../components/main/Filter';
import SingleNote from '../../components/main/SingleNote';


class MainPage extends Component {
  render() {
    const arr = [1, 2, 3, 4];
    return (
      <div className='mainPage'>
        <div className='header'>
          <h3>Hi, name</h3>
          <button>Log out</button>
        </div>
        <Filter />
        <div className='main'>
          <div>
            <Search />
            <section className='quickNote'>
              <textarea placeholder='Quick note...' />
              <button>Add</button>
            </section>
          </div>
          <section className='allNotes'>
            <div className='oneDay'>
              <h3>Today</h3>
              {arr.map(note => <SingleNote note={ note } />)}
            </div>
            <div className='oneDay'>
              <h3>Yesterday</h3>
              {arr.map(note => <SingleNote note={ note } />)}
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
    );
  }
}

export default MainPage;
