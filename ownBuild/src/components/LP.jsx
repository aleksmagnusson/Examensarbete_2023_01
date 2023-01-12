import React from 'react'
import "./LP.css"
import PopUp from './PopUp'

function LP() {
    return (
        <div>
            <PopUp />
            <container className="container1">
                <div>
                    <h2>Sunshine Lotion Vitamine-D</h2>
                    <h4>GIVES MAXIMUM POTENTIAL RICHES THE SKIN.</h4>
                </div>
                <div>
                    <button className='learnMore1'>LEARN MORE</button>
                </div>
            </container>
            <container className="container2">
                <div>
                    <h2>From natural craftsmanship to quality products:</h2>
                    <h4>The company's development in sustainable production - Latest from Clé de peau Beauté.</h4>
                </div>
                <div>
                    <box className='boxContainer1'>
                        <img src="https://images.unsplash.com/photo-1583912267670-6575ad472688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=535&q=80" height="214" width="535" alt='women do science work' />
                        <img src='https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=535&q=80' height="214" width="535" alt='hands holding dirt' />
                    </box>
                    <div>
                        <button className='learnMore1'>SKIN CELL SCIENCE</button>
                        <button className='learnMore1'>BEHIND THE HANDCRAFTS</button>
                    </div>
                </div>
            </container>
            <container className="container3">
                <box>
                    <img src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1083&q=80" height="400" width="610" />
                </box>
                <box className="boxContainer2">
                    <h2>LATEST FROM CPB:</h2>
                    <h4>WE HAVE PLACES AVAILABLE RIGHT NOW FOR CLÈ DE PEAU BEAUTÈ's E-LEARNING.
                        RESERVE YOUR PLACE NOW! LEARN TOGETHER ABOUT OUR SUSTAINABILITY</h4>
                    <button className='learnMore1'>LEARN MORE</button>

                </box>
            </container>
        </div>
    )
}

export default LP