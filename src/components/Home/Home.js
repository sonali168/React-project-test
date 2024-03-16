import React, { useState } from "react";
import Slidebar from "../Slidebar/Slidebar";
import "./Home.css"
import NoteContainer from "../NoteContainer/NoteContanier"
import CenterModal from "../Slidebar/CenterModal";


function Home() {
    const notes = [{
        text: "testing1",
        time: "12pm"
    },
    {
        text: "testing1",
        time: "5AM"
    }]


    const [groups, setGroups] = useState([])

    // const AddNote =()=>{
    //     const tempNotes = [...notes]
       
    //     tempNotes.push({
    //         text:"",
    //         time:Date.now()
    //     })
    //     SetNotes(tempNotes);
    // }
   

    return (
        <div className="home">
            <Slidebar  groups={groups}/>
            <NoteContainer notes={notes} />
            {/* <CenterModal groups={groups}  /> */}
        </div>

    )
}

export default Home;