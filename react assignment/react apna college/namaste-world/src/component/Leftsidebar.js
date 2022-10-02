import React from 'react';
import './leftsidebar.css';

function Leftsidebar() {
  return (
    <>
    
        <div className="leftsidecontainer">
            <div className="firstrow">
                <a href='#' className="firstcol">
                    <img src={require('./image/Vector.png')} alt="logo" />
                </a>
                <a className="secondcol">
                  School Space
                </a>
            </div>
            <hr className='hrline' />
            <div className="secondrow">
              {/* First row  */}
              <div className="listrow1">
                    <div className="col-first"> <img src={require('./image/Dashboard Vector (1).png')} alt="logo" /></div>
                  <a href="#" className="col-second">  Dashboard </a>
              </div>
              {/* second row  */}
              <div className="listrow2">
                    <div className="col-first"> <img src={require('./image/course.png')} alt="logo" /></div>
                    <a href="#" className="col-second"> Course</a>
              </div>
              {/* third row  */}
              <div className="listrow3">
                    <div className="morestyle col-first "> <img src={require('./image/student.png')} alt="logo" /></div>
                    <a href="#" className="morestyle col-second" > Student</a>
              </div>
            {/* fourth row  */}
            <div className="listrow4">
                    <div className="col-first"> <img src={require('./image/exam.png')} alt="logo" /></div>
                    <a href="#" className="col-second"> Exams</a>
              </div>
                {/* fifth row  */}
                <div className="listrow5">
                    <div className="col-first"> <img src={require('./image/result.png')} alt="logo" /></div>
                    <a href="#" className="col-second"> Result</a>
              </div>
              {/* Sixth row  */}
              <div className="listrow6">
                    <div className="col-first"> <img src={require('./image/notic board.png')} alt="logo" /></div>
                    <a href="#" className="col-second"> Notice Board</a>
              </div>
              {/* seventh row  */}
              <div className="listrow7">
                    <div className="col-first"> <img src={require('./image/live class.png')} alt="logo" /></div>
                    <a href="#" className="col-second"> Live Class</a>
              </div>
              {/* eight row  */}
              <div className="listrow8">
                    <div className="col-first"> <img src={require('./image/notification 1.png')} alt="logo" /></div>
                    <a href="#" className="col-second"> Notification </a>
              </div>
            </div>
            {/* container third row  */}
            <div className="thirdrow">
                <div className="userlogo"><img src={require('./image/user image.png')} alt="" /></div>
                <div className="contenttext"><p className="name">Andy Samberg</p> <p className="email">andy.samberg@gmail.com</p></div>
                <a className="button"> view profile </a>
            </div>
        </div>
    
    </>
  )
}

export default Leftsidebar ;