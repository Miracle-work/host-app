import React from 'react';
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div style={{textAlign:"center",marginTop:"250px"}}>
             
            <h4>Page Not Found (Error 404)</h4>  
            <Link to="/login">Go to Home </Link>
            
        </div>
    );
};

export default NotFound;