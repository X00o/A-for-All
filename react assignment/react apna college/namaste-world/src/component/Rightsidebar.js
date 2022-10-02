import React, { useState } from 'react';
import './rightsidebar.css';
import Addmodal from './Addmodal'

function Rightsidebar() {
  const [openModal, setOpenModal] = useState(false);
  return (
   <>
        <div className="heading">
            <div className="title">Student</div>
            <div  className="btnn" onClick={()=> setOpenModal(true)}>+ Add</div>
        </div>
        <div className="rightsidecontainer">

                <div className="section ">
                    <div className="col-2">No</div>
                    <div className="col-2">Student Name</div>
                    <div className="col-2">Class</div>
                    <div className="col-2">Result</div>
                    <div className="col-2">Score</div>
                    <div className="col-2">Grade</div>
                </div>


        </div>
        <div className="footer"><p>Showing 7 of 7 entries</p></div>
        {openModal && <Addmodal  closeModal = {setOpenModal}/>}
   </>
  )
}

export default Rightsidebar;