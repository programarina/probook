import React, { Component } from 'react';

import AddNote from '../../components/create/AddNote';

class CreateNotePage extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <h3>Hi, name</h3>
                    <button>Log out</button>
                </div>
                <div className='createNote'>
                    <AddNote />
                    <div className='previewCode'>
                        Preview
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateNotePage;