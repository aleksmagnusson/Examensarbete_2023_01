import React from 'react'
import { FiX } from "react-icons/fi"
import "./PopUp.css";



function PopUp() {

    const x = document.getElementById("popupBox")

    function closePopUp() {
        x.close
    }

    return (
        <box className="popupBox" id='popupBox'>
            <p>WE HAVE PLACES AVAILABLE RIGHT NOW FOR CLÈ DE PEAU BEAUTÈ's E-LEARNING. RESERVE YOUR PLACE NOW!</p>
            <FiX onClick={closePopUp} className='FiX' color='white' size='25px' />
        </box>
    )
}

export default PopUp