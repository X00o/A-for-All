import { useState, useEffect } from "react";
import React from "react";
import "./addmodal.css";

function Addmodal({ closeModal }) {
// 
const initialValues = { username: "", email: "", password: "" , score: ""};
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
};

useEffect(() => {
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(formValues);
  }
}, [formErrors]);
const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.username) {
    errors.username = "Username is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters!";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters!";
  }

  if (!values.score) {
    errors.score = "score is required!";
  } else if (values.score < 30) {
    errors.score = "score must be more than 30 marks!";
  } else if (values.score > 100) {
    errors.score = "score cannot exceed more than 100 marks!";
  }
  if (!values.classNumber) {
    errors.classNumber = "class is required!";
  } else if (values.classNumber < 1) {
    errors.classNumber = "class must be more than 1!";
  } else if (values.classNumber > 12) {
    errors.classNumber = "class cannot exceed more than 12! ";
  }
  return errors;
};

// 


  return (
    <>
      <div className="modalBackground" onClick={() => closeModal(false)}></div>
      <div className="modalContainer ">
      

        {/* first section  */}
        <div className="title2">Add student</div>
        <div className="lineAfterTitle2"></div>
        {/* second Section      */}
        <div className="bodycontent">
          <form className="form" id="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label for="username">STUDENT NAME</label> <br />
              <input
                type="text"
                name="username"
               
                placeholder="Enter the student name "
               
              value={formValues.username}
              onChange={handleChange}
              /> <br />
       
              <p id="rederrors">{formErrors.username}</p>
            </div>
            <div className="form-control">
              <label for="class">CLASS</label> <br />
              <input
                id="class"
                type="number"
                placeholder="Please input values between 1 & 12 "
         
                name="classNumber"
               
             
                value={formValues.classNumber}
                onChange={handleChange}
              /> <br />
             <p id="rederrors">{formErrors.classNumber}</p>
            </div>
            <div className="form-control">
              <label for="score">SCORES</label> <br />
              <input
                type="number"
             
                name="score"
                placeholder="Please input values between 0 & 100 "
             
                value={formValues.score}
                onChange={handleChange}
              /> <br />
              

              <p id="rederrors">{formErrors.score}</p>
            </div>
            <div className="form-control">
              <label for="score">Password</label> <br />
              <input
                type="number"
                name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              /> <br />
             
              <p id="rederrors">{formErrors.password}</p>
            </div> <br />
           
          </form>
        </div>
        {/* Third section  */}
        <div className="lineBeforeFooterContent"></div>
        <div className="footercontent">
          <button className="btnConfirm1" onClick={() => closeModal(false)}>
            Close
          </button>
          <button onClick={handleSubmit} className="btnConfirm">Confirm</button>
        </div>
      </div>

      {/* information   */}
    </>
  );
}
export default Addmodal;
