import './App.css';
//import { globalStyles } from './constants';
//import {} from "./AppStylemodule.css"
import Apple from './Apple';
import Home from './Home';
import {BrowserRouter, Route,Routes,Link} from 'react-router-dom';
import { NotFound } from './NotFound';
import {ThemeProvider} from '@emotion/react';
import {theme} from './styles';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      {/* <Button>font-size: 1rem</Button> */}
    {/* <img src={'${process.env.REACT_APP_HOSTED_URL}logo192.png'} alt="React logo"/> */}
     {/* <img src={logo} alt="image"/>  */}
    <ToastContainer/>
    <BrowserRouter>
    <div  
      // style={{padding:25, display: 'flex', columnGap:10}}
      className='nav' 
      // style={{...globalStyles.nav,}}
    >
      <Link to='/'
      style={{
        marginLeft: 5,
      }}>
        Home</Link>
      <Link to='/apple'
      style={{ 
        marginLeft: 10,
      }}>
        Apple</Link>
        <Link to='/applet'
      style={{
        marginLeft: 15,
      }}>
        Applet</Link>
    </div>
    <Routes >
      <Route path='/' element={<Home/>}></Route>
      <Route path='/apple' element={<Apple/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>
  </>
  );
};


export default App;
