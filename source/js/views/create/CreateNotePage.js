import React, { Component } from 'react';

class CreateNotePage extends Component {
    render() {
        return (
            <div>
                <header>
                    <h3>Hi, name</h3>
                    <button>LogOut</button>
                </header>

                <div className='createNote'>

                    <div className='addNote'>
                        <input type='text' placeholder='title' />
                        <textarea placeholder='code'></textarea>
                        <button>Save</button>
                    </div>

                    <div className='previewCode'>Preview</div>

                </div>
            </div>
        );
    }
}

export default CreateNotePage;