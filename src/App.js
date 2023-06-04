import './App.css'
//import { globalStyles } from './constants';
//import {} from "./AppStylemodule.css"

import {BrowserRouter} from 'react-router-dom';
// import { NotFound } from './NotFound';
import {ThemeProvider} from '@emotion/react';
import {theme} from './styles';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header/Header';
 import Footer from './components/footer/Footer';
import MainNavigation from './MainNavigation';
import { AuthWrapper } from './context/auth.context';
// import { BookListing } from './pages/booklisting';
// import Header from './components/Header';
function App() {
 
  return (
    <BrowserRouter>
 <AuthWrapper>
    <ThemeProvider theme={theme}>
      {/* <Button>font-size: 1rem</Button> */}
    {/* <img src={'${process.env.REACT_APP_HOSTED_URL}logo192.png'} alt="React logo"/> */}
     {/* <img src={logo} alt="image"/>  */}
   
    <Header/>
    {/* <BrowserRouter> */}
    {/* <Header/> */}
    {/* <Header/> */}
    {/* <div  
      // style={{padding:25, display: 'flex', columnGap:10}}
      className='nav' 
      // style={{...globalStyles.nav,}}
    >
       <Link to='/login'
      style={{
        marginLeft: 15,
      }}>Login</Link>
      <Link to='/apple'
      style={{ 
        marginLeft: 10,
      }}>
        Apple</Link>
        <Link to='/register'
      style={{
        marginLeft: 15,
      }}>
        Register</Link> */}
        {/* <Link to='/booklisting'
      style={{
        marginLeft: 15,
      }}>booklisting</Link> */}
    {/* </div> */}
    {/* <Routes >
    <Route path='/l' element={<Update/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/apple' element={<Apple/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/update' element={<UpdateProfile/>}></Route>
      {/* <Route path='/booklisting' element={<BookListing/>}></Route> */}
 <main>
 <MainNavigation/>
 </main>
  
    <Footer/>
    <ToastContainer/>
  </ThemeProvider>
  </AuthWrapper>
  </BrowserRouter>
  );
};
export default App;
