import React from 'react';
import classes from './Login.module.scss';
import Form from './Form';
const Login = () => {
    return (
        <div className={classes.container}>
           <div className='container'>
                <div className={classes.logo}>
                    Logo
                </div>
                <div className={`shadow-sm ${classes.card}`}>
                    <p className={`text-center ${classes.form_title}`}>الدخول الي ميراكل للتصنيع و الأصول</p>
                    <Form/>
                </div>
            </div>
        </div>
    );
};

export default Login;