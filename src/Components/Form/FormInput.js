import React, { useState } from 'react';
import CardModal from '../Modal/CardModal'
import classes from './Form.module.scss';
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
const FormInput = (props) => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className={`${classes.form_input_first}`}>
                <input type="text" id={props.id} firstInputName='{props.inputName}' className='form-control' />
            </div>
            <div className={`${classes.form_input_second}`}>
                <input type="text" secondInputName='{props.inputName}' className='form-control' />
            </div>
            <button type='button'  className={`${classes.form_search_icon}`} onClick={handleShow}>
                <AiOutlineSearch className={`${classes.icon}`}/>
            </button>
            <button type='button' onClick={props.onAddHandler} className={`${classes.form_plus_icon}`}>
                <AiOutlinePlusCircle className={`${classes.icon}`}/>
            </button>
            <button type='button' onClick={props.onRemoveHandler} className={`${classes.form_minus_icon}`} >
                <AiOutlineMinusCircle className={`${classes.icon}`}/>
            </button>

            {/* Modal */}
            <CardModal handleShow={show} handleClose={handleClose}/>
        </>
    );
};

export default FormInput;