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
    this.transformToObject(this.props);
  }

  transformToObject = (props) => {
    let allNotes = props.notes.reduce((accumulator, currentValue) => {
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
  componentWillReceiveProps(nextProps) {
    if (this.props.notes !== nextProps.notes) {
      this.transformToObject(nextProps);
    }
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
