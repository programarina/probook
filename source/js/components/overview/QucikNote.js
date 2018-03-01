import React, { Component } from 'react';

class QuickNote extends Component {
  render() {
    return (
      <section className='quickNote'>
        <textarea placeholder='Quick note...' />
        <button>Add</button>
      </section>
    );
  }
}

export default QuickNote;
