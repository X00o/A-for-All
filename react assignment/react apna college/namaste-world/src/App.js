import logo from './logo.svg';
import './App.css';
import Leftsidebar from './component/Leftsidebar';
import Rightsidebar from './component/Rightsidebar'


function App() {

  return (
   <>
   <div className="container-fluid">
   <Leftsidebar/>
   <Rightsidebar />
    
   </div>
   </>
   
  );
}

export default App;
