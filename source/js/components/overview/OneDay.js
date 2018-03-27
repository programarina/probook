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
    this.transformToObject();
  }

  transformToObject = () => {
    let allNotes = this.props.notes.reverse().reduce((accumulator, currentValue) => {
      if (!accumulator[currentValue.dateCreated]) {
        accumulator[currentValue.dateCreated] = [];
      }
      accumulator[currentValue.dateCreated].push(currentValue);
      return accumulator;
    }, {});
    this.setState({
      allNotes
    });

    Object.keys(allNotes).map((noteDate) => {

      console.log(allNotes[noteDate]);
    });
  }

  renderSingleDay = () => {
    const { allNotes } = this.state;

    return (Object.keys(allNotes).map(noteDate => {
      return (
        <div className='oneDay' key={noteDate}>
          <h3 key={noteDate}>{noteDate}</h3>
          {allNotes[noteDate].map(note => <SingleNote note={note} key={note.id} gridView={this.props.gridView} />)}
        </div>
      )
    }));
  }

  render() {
    return (
      <div>
        {this.renderSingleDay()}
      </div>
    );
  }
}

export default OneDay;
