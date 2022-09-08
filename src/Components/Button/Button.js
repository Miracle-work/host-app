import React from 'react';
import classes from './Button.module.scss';
import { FiSave } from "react-icons/fi";
import { TiArrowBack } from "react-icons/ti";

const Button = (props) => {
    const {backHandler}=props
    return (
        
        <div className={`${classes.btn_center}`}>
            <button type='submit' className={`border-0 ${classes.btn} ${classes.btn_blue}`}>
                <FiSave className={`${classes.btn_icon}`}/> حفظ 
            </button>
            <a href='#' className={`${classes.btn} ${classes.btn_light}`} onClick={props.backHandler}>
                <TiArrowBack className={`${classes.btn_icon}`}/> تراجع
            </a>
        </div>
    );
};

export default Button;