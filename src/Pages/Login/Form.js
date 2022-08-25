import React from 'react';
import { FaEnvelope } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import classes from './Login.module.scss';

const Form = () => {
    return (
        <form method='Post' action=''>
            <div className={`row ${classes.col_wrapper}`}>
                <div className='col-md-12'>
                <FaEnvelope className={classes.icon}/>
                <input className={`form-control ${classes.input_field}`} type="text" placeholder='اسم المستخدم'/>
                </div>
            </div>
            <div className={`row ${classes.col_wrapper}`}>
                <div className='col-md-12'>
                <HiLockClosed className={classes.icon}/>
                <input className={`form-control ${classes.input_field}`} type="password" placeholder='كلمة المرور'/>
                </div>
            </div>
            <div className={`row ${classes.col_wrapper}`}>
                <div className='col-md-6'>
                    <input className={`form-control`} type="submit"/>
                </div>

                <div className='col-md-6'>
                    <input className={`${classes.submit_btn}`} type="submit" value='الدخول'/>
                </div>
            </div>
        </form>
    );
};

export default Form;