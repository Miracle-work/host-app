import {React, useState} from 'react';
import classes from './InsertForm.module.scss'
import { AiOutlineSearch } from "react-icons/ai";
import CardModal from '../Modal/CardModal';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';


const InsertForm = (props) => {
    const {backHandler,returnedRowData}=props 
     // Show Modal
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     // End show modal
     const {register,handleSubmit, formState: { errors }}=useForm();
     const onSubmit=(data)=>{
        console.log(data)
     }
    return (
        <div>
            <form  dir="rtl" onSubmit={handleSubmit(onSubmit)}>
                <div className={`${classes.container}`}>
                    <div className={`${classes.flex_container}`}>
                        <div className={`${classes.label}`}>
                            <label htmlFor='code' className=''>الكود </label>
                        </div>
                        <div className={`${classes.form_input}`}>
                            <input type="text" id="code" className={`form-control ${errors.code && classes.error}`}  
                            {...register("code",{ required: true,value:returnedRowData.id })}/>
                        </div>
                        <div className={`${classes.label}`}>
                            <label htmlFor='name' className=''>الاسم </label>
                        </div>
                        <div className={`${classes.form_input}`}>
                            <input type="text" id='name' className={`form-control ${errors.name && classes.error}`} 
                            {...register("name",{ required: true ,value:returnedRowData.name})} />
                        </div>
                    </div>
                    <div className={`${classes.flex_container}`}>
                        <div className={`${classes.form_label}`}>
                            <label htmlFor='product' className=''>رقم الحساب</label>
                        </div>
                        <div className={`${classes.form_input_first}`}>
                            <input type="text" id="product" className={`form-control ${errors.serial && classes.error}`} 
                            {...register("serial",{ required: true ,value:returnedRowData.phone})} />
                        </div>
                        <div className={`${classes.form_input_second}`}>
                            <input type="text" className='form-control'/>
                        </div>
                        <button type='button' className={`${classes.form_search_icon}`} onClick={handleShow}>
                            <AiOutlineSearch className={`${classes.icon}`}/>
                        </button>
                    </div>
                </div>
                <Button backHandler={backHandler}/>
            </form>
            {/* Modal */}
            <CardModal handleShow={show} handleClose={handleClose}/>
        </div>
    );
};

export default InsertForm;