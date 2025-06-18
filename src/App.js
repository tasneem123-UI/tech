
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Swipers from './Swiper';
import Avatrer from './Avatrer';
import Footor from './Footor';
import Train from './Train';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Main from './Main';
import Courses from './Assets/Courses';
import Coursid from './Coursid';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
 <Navbar></Navbar>
 


<Routes>
       <Route path='/' element={<Main/>}  />
    <Route path='/courses' element={<Courses/>}  />
   
<Route path='/courses/:id' element={<Coursid/>} />

</Routes>

 
<Footor></Footor>
    </div>
    </BrowserRouter>
  );
}

export default App;
