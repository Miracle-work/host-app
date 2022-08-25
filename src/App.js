import { useState } from "react";
import Home from "./Pages/Home/Home";
// Bootstrap Style
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.scss'
import { BrowserRouter,Route,Navigate,Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import NotFound from "./Components/Error/404";
// End of Bootstrap Style
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
 
  // const logIn = () => {
  // setisLoggedIn(true);
  // };
 
  // const logOut = () => {
  // setisLoggedIn(false);
  // };

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />}/>
      <Route path='*' element={<NotFound />} />
     
      { isLoggedIn ?
        <Route path="/dashboard" element={<Home />} /> :
        <Route path="/dashboard" element={<Navigate to="/login" replace />} />
      }

      { !isLoggedIn ?
        <Route path="/login" element={<Login />} /> :
        <Route path="/login" element={<Navigate to="/dashboard" replace />} />
      }

    </Routes>
    </BrowserRouter>

  );
}

export default App;
