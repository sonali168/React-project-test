
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import pluse_icon from '../../assests/pluse_icon.png'
import './Slidebar.css'
import './CenterModal.css'



function Slidebar(props) {
    const navigate = useNavigate();
    const [groups, setGroups] = useState([])

    const handleSubmit = () => {
        console.log("inside handlesubmit")
        console.log("create group", groups)
        navigate('/');
    }

    const noteAdd = () =>{

    }
    return (
        <>
            <div className="slidebar">
                <h1>Pocket Notes</h1>
                <ul className='slidebar_list'>
                    {
                        props.groups.map((item, index) =>
                            <Slidebar
                                key={index}
                                groups={item}
                            />)
                    }
                <li onClick={()=>{props.addNote()}} >work</li>

                </ul>

                <img src={pluse_icon} alt="add" onClick={() => {
                    navigate('/CenterModal');
                }} />

            </div>



        </>
    )
}
export default Slidebar;