import {React, useState} from 'react';
import classes from './InsertForm.module.scss'
import { AiOutlineSearch } from "react-icons/ai";
import CardModal from '../Modal/CardModal';
import Button from '../Button/Button';

const InsertForm = () => {
     // Show Modal
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     // End show modal
    return (
        <div>
            <form method='' action='' dir="rtl">
                <div className={`${classes.container}`}>
                    <div className={`${classes.flex_container}`}>
                        <div className={`${classes.label}`}>
                            <label htmlFor='code' className=''>الكود </label>
                        </div>
                        <div className={`${classes.form_input}`}>
                            <input type="text" id="code" className='form-control' />
                        </div>
                        <div className={`${classes.label}`}>
                            <label htmlFor='name' className=''>الاسم </label>
                        </div>
                        <div className={`${classes.form_input}`}>
                            <input type="text" id='name' className='form-control' />
                        </div>
                    </div>
                    <div className={`${classes.flex_container}`}>
                        <div className={`${classes.form_label}`}>
                            <label htmlFor='product' className=''>رقم الحساب</label>
                        </div>
                        <div className={`${classes.form_input_first}`}>
                            <input type="text" id="product" className='form-control' />
                        </div>
                        <div className={`${classes.form_input_second}`}>
                            <input type="text" className='form-control' />
                        </div>
                        <button type='button' className={`${classes.form_search_icon}`} onClick={handleShow}>
                            <AiOutlineSearch className={`${classes.icon}`}/>
                        </button>
                    </div>
                </div>
                <Button/>
            </form>
            {/* Modal */}
            <CardModal handleShow={show} handleClose={handleClose}/>
        </div>
    );
};

export default InsertForm;