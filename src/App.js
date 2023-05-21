import './App.css';
import Apple from './Apple';
import Home from './Home';
import {BrowserRouter, Route,Routes,Link} from 'react-router-dom';
import { NotFound } from './NotFound';
function App() {
  return (
    <>
    <BrowserRouter>
    <div style={{fontSize:20}}>
     <Link to="/" style={{marginLeft:5}}>Home</Link>
     <Link to="/apple" style={{marginLeft:10}}>Apple</Link>
     </div>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/apple" element={<Apple/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
