import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
import Course from "./pages/Course/Course";
import Register from "./pages/Register/Register";



import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/register/:id' element={<Register/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
