import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Modal from './Component/Modal';

function App() {
      const [openModal, setOpenModal] = useState(false);

  return (
    <>
<div className="App">
  <h1>This is a React code to understand the modal</h1>
  <button className='openModalBtn'
  onClick={()=> setOpenModal(true)}
  >Open</button>
      {openModal && <Modal closeModal = {setOpenModal}/>}
</div>
    </>
  );
}

export default App;
