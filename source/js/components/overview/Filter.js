import React, { Component } from 'react';
import { LIST_OF_MONTHS } from '../../constants/months';

class Filter extends Component {
  render() {
    const months = LIST_OF_MONTHS;
    return (
      <div className={(this.props.showCalendar)?`calendarList calendarShow`: `calendarList calendarNotShow`}>
        <ul>
          {months.map(month => <li key={ month }>{month}</li>)}
        </ul>
      </div>
    );
  }
}

export default Filter;
