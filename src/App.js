import './App.css';
import Details from './component/Details';
import Header from './component/Header';
import Photos from './component/Photos';
import Users from './component/Users';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes ,useNavigate } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Link to={``}></Link>
      <Routes>
      <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Details />} />
        <Route path="/photos" element ={<Photos/>}/>
      </Routes>

    </BrowserRouter>


  );
}

export default App;
