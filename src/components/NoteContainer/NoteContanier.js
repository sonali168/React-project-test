import React from 'react'
import Note from '../Note/Note';
import './NoteContainer.css'

function NoteContainer(props) {

    // const reverseArray =(arr)=>{
    //     const array=[]

    //     for(let i=arr.length - 1; i>0; --i){
    //         array.push(arr[i])
    //     }
    //     return array
    // }

    // const notes=reverseArray(props.notes)
   
    return (
        <>
            <div className='note-container'>
                <h1>notes</h1>
                <div className='note-container-notes'>
                    {props.notes?.length>0 ? props.notes.map((item, index) =>
                        <Note
                        key ={index}
                        note = {item}/>
                        ): <h2>titlepage</h2> }

                    
                    
                </div>
            </div>
        </>
    )
}
export default NoteContainer;