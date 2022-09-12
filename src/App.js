import { useState,useContext } from "react";
import Home from "./Pages/Home/Home";
// Bootstrap Style
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.scss'
import { BrowserRouter,Route,Navigate,Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import NotFound from "./Components/Error/404";
import AuthContext from './Store/Auth-Context'
import Manufacturing from './Pages/Home/Manufacturing/Manufacturing'
import Assets from './Pages/Home/Assets/Assets'
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes'
import useWindowSize from './Hooks/useWindowSize'
import NavBar from './Components/NavBar/NavBar';

// End of Bootstrap Style
function App() {
  const authContext=useContext(AuthContext)
  const isLoggedIn=authContext.isLoggedIn
 
  return (
    <>
    <NavBar/> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />}/>
      <Route path='*' element={<NotFound />} />
      <Route exact path='/dashboard' element={<ProtectedRoutes isLoggedIn={isLoggedIn}/>}>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/dashboard/manufacturing" element={<Manufacturing />}/>
        <Route path="/dashboard/assets" element={<Assets />}/>
      </Route>

      { isLoggedIn ?
        <Route path="/login" element={<Navigate to="/dashboard" replace />}/>:
        <Route path="/login" element={<Login/> }/>
      }

    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
