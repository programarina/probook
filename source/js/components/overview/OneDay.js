import React, { Component } from 'react';
import SingleNote from './SingleNote';

class OneDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: {}
    };
  }
  componentDidMount() {
    this.renderSingleDay();
  }

  renderSingleDay() {
    let allNotes = this.props.notes.reduce((accumulator, currentValue) => {
      if (!accumulator[currentValue.dateCreated]) {
        accumulator[currentValue.dateCreated] = [];
      }
      accumulator[currentValue.dateCreated].push(currentValue);

      return accumulator;
    }, {});

    this.setState({
      allNotes
    });
  }

  render() {
    return (
      <div className='oneDay'>
        <h3></h3>
        {this.props.notes.map(note => <SingleNote note={note} key={note.id} gridView={this.props.gridView} />)}
      </div>
    );
  }
}

export default OneDay;
