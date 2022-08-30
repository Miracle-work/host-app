import React from 'react';
import classes from './Login.module.scss';
import Form from './Form';
import { ToastContainer, toast } from 'react-toastify';    
const Login = () => {
    const error=(msg)=>{
        toast.error(msg)
    }
    return (
        <>
            <ToastContainer />
            <div className={classes.container}>
            <div className={`container ${classes.wrapper}`}>
                    <div className={classes.logo}>
                        Logo
                    </div>
                    <div className={`shadow-sm ${classes.card}`}>
                        <p className={`text-center ${classes.form_title}`}>الدخول الي ميراكل للتصنيع و الأصول</p>
                        <Form onError={error}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;