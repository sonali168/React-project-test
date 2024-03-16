import React, { useState } from "react";
import './CenterModal.css'
import { useNavigate } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";

function CenterModal() {
    const colors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF']
   
    const navigate = useNavigate()

    const [groups, setGroups] = useState([])
    
    const handleSubmit = ()=>{
        // console.log("form submitted")
        // console.log("groupName", groups)
        
        navigate('/');
    }

    const arrowHandle =()=>{
        navigate('/');
    }
    return (
        <>
            <div className="container">
            <button className="back-arrow hidden" onClick={arrowHandle}><GoArrowLeft /> </button>
                <div className="center_modal_container popup">
                    <h1>Create New group</h1>

                    <div className="list_input">
                       
                        <label htmlFor="groupName">Group Name</label>
                        <input type="text" id="groupName" value={groups} onChange={(e) =>{
                            setGroups(e.target.value)
                            
                        }} />
                    </div>

                    <div className="color">
                        <ul className="color_list" >
                            <li>Choose colour</li>
                            {
                                colors.map((item, index) => (
                                    <li
                                        className="colors_dots"
                                        key={index}
                                        style={{ backgroundColor: item }}
                                    />
                                ))
                            }
                        </ul>
                    </div>
                    <button className="create-btn" onClick={handleSubmit}
                    >Create</button>
                    
                </div>
            </div>
        </>
    )
}

export default CenterModal