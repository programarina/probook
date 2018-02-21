import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom'

class MainPage extends Component {
    render() {
        return (<div className='mainPage'>

            <header>
                <h3>Hi, name</h3>
                <button>LogOut</button>
            </header>
            <aside>
                <ul>
                    <li>January</li>
                    <li>February</li>
                    <li>March</li>
                    <li>April</li>
                    <li>May</li>
                    <li>June</li>
                    <li>July</li>
                    <li>August</li>
                    <li>September</li>
                    <li>October</li>
                    <li>November</li>
                    <li>December</li>
                </ul>
            </aside>
            <main>

                <section className='searchForm'>
                    <input type='text' placeholder='Search' />
                </section>

                <section className='quickNote'>
                    <textarea placeholder='Quick note...'></textarea>
                    <button>Add note</button>
                </section>

                <section className='allNotes'>
                    <div>
                        <h3>Today</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </p>
                    </div>

                    <div>
                        <h3>Yesterday</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </p>
                    </div>

                </section>
            </main>
        </div>
        );
    }
}

export default MainPage;