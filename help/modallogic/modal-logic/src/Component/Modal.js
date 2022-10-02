import React from 'react'

function Modal({closeModal}) {
  return (
    <>
        <div className="modalBackground">
            <div className="modalContainer">
            <button onClick={()=> closeModal(false)}> X </button>
                <div className="title">
                    <h1>Are you sure, You want to continue</h1>
                </div>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, et.</p>
                </div>
                <div className="footer">
                    <button onClick={()=> closeModal(false)}>Close</button>
                    <button>Comfirm</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Modal