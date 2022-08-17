import React from 'react';
import classes from './Button.module.scss';
import { FiSave } from "react-icons/fi";
import { TiArrowBack } from "react-icons/ti";

const Button = () => {
    return (
        
        <div className={`${classes.btn_center}`}>
            <a href='#' className={`${classes.btn} ${classes.btn_blue}`}>
                <FiSave className={`${classes.btn_icon}`}/> حفظ 
            </a>
            <a href='#' className={`${classes.btn} ${classes.btn_light}`}>
                <TiArrowBack className={`${classes.btn_icon}`}/> تراجع
            </a>
        </div>
    );
};

export default Button;