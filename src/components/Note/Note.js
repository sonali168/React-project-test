import React from 'react'
import { IoMdSend } from "react-icons/io";
import './Note.css'

function Note(props) {
    return (
        <>
           
            <div className='note'>

                <div className="text_area_container">
                    <textarea className='text_area' placeholder='Enter your text here...........' defaultValue={props.note.text}></textarea>
                    <span ><IoMdSend /></span>
                </div>
                <p className='time'>{props.note.time}</p>

            </div>
        </>
    )
}
export default Note;