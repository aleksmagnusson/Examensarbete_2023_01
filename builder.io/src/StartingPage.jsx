import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function StartingPage() {
    const [count, setCount] = useState(0)

    return (
        <div className='App'>
            <br />
            <hr />
            <p>/ Vite Create React App /</p>
            <br />
            <div>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>builder.io</h1>
            <div className="card">
                <div><h2>count is: {count}</h2></div>
                <button onClick={() => setCount((count) => count + 1)}>
                    Increment
                </button>
                <button onClick={() => setCount((count) => count - 1)}>
                    Decrement
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default StartingPage
