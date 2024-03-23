import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home";
// import Course from "./pages/Course/Course";
import Register from "./pages/Register/Register";
import Courses from "./pages/Courses/Courses";
import Events from "./pages/Events/Events";
import Terms from "./pages/Terms/Terms";
import Contacts from "./pages/Contacts/Contacts";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Courses' element={<Courses/>}/>
        <Route path='/Events' element={<Events/>}/>
        <Route path='/register/:id' element={<Register/>}/>
        <Route path='/terms/' element={<Terms/>}/>
        <Route path='/contact/' element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
