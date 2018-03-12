import React, { Component } from 'react';
import { LIST_OF_MONTHS } from '../../constants/months';

class Calendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkedMonth: ''
    };
  }
  render() {
    const months = LIST_OF_MONTHS;
    return (
      <div className={(this.props.showCalendar) ? `calendarList calendarShow` : `calendarList`}>
        <ul>
          {months.map((month, indexOfMonth) =>
            <button
              key={month}
              onClick={() => {
                this.props.filterByDate(indexOfMonth);
                this.setState({ checkedMonth: month });
              }}>
              <li
                className={(this.state.checkedMonth === month) ? 'selectedMonth' : ''}
                key={month}>
                {month}
              </li>
            </button>)}
        </ul>
      </div>
    );
  }
}

export default Calendar;
