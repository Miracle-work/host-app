import { useState,useContext } from "react";
import Home from "./Pages/Home/Home";
// Bootstrap Style
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.scss'
import { BrowserRouter,Route,Navigate,Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import NotFound from "./Components/Error/404";
import AuthContext from './Store/Auth-Context'

// End of Bootstrap Style
function App() {
  const authContext=useContext(AuthContext)
  const isLoggedIn=authContext.isLoggedIn
  console.log(isLoggedIn)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />}/>
      <Route path='*' element={<NotFound />} />
      
      { isLoggedIn ?
        <Route path="/dashboard" element={<Home />} /> :
        <Route path="/dashboard" element={<Navigate to="/login" replace />} />
      }

      { isLoggedIn ?
        <Route path="/login" element={<Navigate to="/dashboard" replace />}/>:
        <Route path="/login" element={<Login/> }/>
      }

    </Routes>
    </BrowserRouter>

  );
}

export default App;
