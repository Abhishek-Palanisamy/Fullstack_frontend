import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllSignupDetails from './Fullstack/AllSignupDetails';
import Beveragescreate from './Fullstack/Beveragescreate';
import Deletedata from './Fullstack/Deletedata';
import Getdata from './Fullstack/Getdata';
import Login from './Fullstack/Login';

import Signup from './Fullstack/Signup';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/Signup" element={<Signup/>}></Route>
    <Route path="/AllSignupDetails" element={<AllSignupDetails/>}></Route>
    <Route path="/Getdata" element={<Getdata/>}></Route>
    <Route path="/Deletedata" element={<Deletedata/>}></Route>
    <Route path="/Beveragescreate" element={<Beveragescreate/>}></Route>
    </Routes>
    </BrowserRouter>
    <Login/>
    </div>
  );
}

export default App;
