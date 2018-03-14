import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class QuickNote extends Component {
  constructor(){
    super();
    this.state = {
      quickNote:''
    };
  }
  
  handleClick = ()=>{
    // this.props.setNoteData(this.state.quickNote);
  }

  render() {
    return (
      <section className='quickNote'>
        <textarea 
          placeholder='Quick note...' 
          value={this.state.quickNote}
          onChange={({target})=>this.setState({quickNote:target.value})}/>
        <button onClick={this.handleClick}>Add</button>
      </section>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ setNoteData: setNoteData }, dispatch);
// };


// export default connect(null, mapDispatchToProps)(QuickNote);

export default QuickNote;