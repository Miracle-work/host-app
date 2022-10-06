import {React,useState} from 'react';
import classes from './Toolbar.module.scss';
import { HiPlusSm } from "react-icons/hi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import excel from '../../assets/icons/excel.png'
const Toolbar = (props) => {
    const {addHandler,clickColumn,addNew,editHandler}=props;
    return (
        <nav className={`navbar navbar-expand container ${classes.wrapper}`}>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button className={`${classes.toolbar_link} ${classes.excel_link}`}>
                        <img src={excel} className={classes.nav_icon}/>
                    </button>
                </li>
                <li className="nav-item">
                    <button className={`${classes.toolbar_link} ${classes.delete_link} ${clickColumn.clicked ? classes.link_shadow : ''}`} disabled={addNew}>
                        حذف
                        <RiDeleteBin5Line className='ms-2'/>
                    </button>
                </li>
                <li className="nav-item">
                    <button className={`${classes.toolbar_link} ${classes.edit_link} ${clickColumn.clicked ? classes.link_shadow : ''} `}
                     onClick={()=>editHandler(clickColumn.data)}  disabled={addNew}>
                        تعديل
                        <FiEdit className='ms-2'/>
                    </button>
                </li>
                <li className="nav-item">
                    <button className={`${classes.toolbar_link} ${classes.add_link} ${!clickColumn ? classes.link_shadow : ''}`} onClick={props.addHandler} disabled={clickColumn}>
                        جديد
                        <HiPlusSm className='ms-2'/>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Toolbar;