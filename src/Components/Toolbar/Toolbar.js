import React from 'react';
import classes from './Toolbar.module.scss';
import { HiPlusSm } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import excel from '../../assets/icons/excel.png'
const Toolbar = () => {
    return (
        <nav class={`navbar navbar-expand container ${classes.wrapper}`}>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a className={`${classes.toolbar_link} ${classes.excel_link}`} href="#">
                        <img src={excel} className={classes.nav_icon}/>
                    </a>
                </li>
                <li class="nav-item">
                    <a className={`${classes.toolbar_link} ${classes.delete_link}`} href="#">
                        حذف
                        <RiDeleteBin5Line className='ms-2'/>
                    </a>
                </li>
                <li class="nav-item">
                    <a className={`${classes.toolbar_link} ${classes.edit_link}`} href="#">
                        تعديل
                        <FiEdit className='ms-2'/>
                    </a>
                </li>
                <li class="nav-item">
                    <a className={`${classes.toolbar_link} ${classes.add_link}`} href="#">
                        جديد
                        <HiPlusSm className='ms-2'/>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Toolbar;