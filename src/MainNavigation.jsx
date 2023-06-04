import React from 'react'
 import Register from './pages/Register';
import Login from './pages/Login';
// import UpdateProfile from './pages/UpdateProfile';
import {Route,Routes} from 'react-router-dom';
import { RoutePaths } from './utils/enum';
import { BookListing } from './pages/booklisting/index';
export default function MainNavigation() {
  return (
   <Routes>
    <Route exact path={RoutePaths.Login} element={<Login/>}></Route>
    <Route exact path={RoutePaths.Register} element={<Register/>}></Route>
    {/* <Route exact path={RoutePaths.UpdateProfile} element={<UpdateProfile/>}></Route> */}
    <Route exact path={RoutePaths.BookListing} element={<BookListing/>}></Route>
   </Routes>
  );
};
