import Home from "./Pages/Home/Home";
// Bootstrap Style
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.scss'
import { BrowserRouter,Route,Navigate,Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import NotFound from "./Components/Error/404";
// End of Bootstrap Style
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />}/>
      <Route path='*' element={<NotFound />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
