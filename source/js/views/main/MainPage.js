import React, { Component } from 'react';
import { LIST_OF_MONTHS } from '../../../constants/months';

class MainPage extends Component {
    render() {
        const months = LIST_OF_MONTHS;
        return (<div className='mainPage'>
            <div className='header'>
                <h3>Hi, name</h3>
                <button>Log out</button>
            </div>
            <div className='calendarList'>
                <ul>
                    {months.map(month => <li key={month}>{month}</li>)}
                </ul>
            </div>
            <div className='main'>
                <div>
                    <section className='searchForm'>
                        <input type='text' placeholder='Search' />
                    </section>
                    <section className='quickNote'>
                        <textarea placeholder='Quick note...'></textarea>
                        <button>Add note</button>
                    </section>
                </div>
                <section className='allNotes'>
                    <div className='oneDay'>
                        <h3>Today</h3>
                        <div className='singleNote'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </div>
                        <div className='singleNote'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </div>
                        <div className='singleNote'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </div>
                        <div className='singleNote'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </div>
                    </div>
                    <div className='oneDay'>
                        <h3>Yesterday</h3>
                        <div className='singleNote'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </div>
                    </div>
                    <button className='addNoteBtn'>Create note</button>
                </section>
            </div>
        </div >
        );
    }
}

export default MainPage;