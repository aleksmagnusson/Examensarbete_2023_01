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
                        <h2>Image 1</h2>
                        <h2>Image 2</h2>
                    </box>
                    <div>
                        <button>SKIN CELL SCIENCE</button>
                        <button>BEHIND THE HANDCRAFTS</button>
                    </div>
                </div>
            </container>
            <container className="container3">

            </container>

        </div>
    )
}

export default LP