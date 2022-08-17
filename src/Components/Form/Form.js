import { React,useState } from 'react';
import Button from '../Button/Button';
import FormInput from './FormInput';
import CardModal from '../Modal/CardModal'
import classes from './Form.module.scss';
import { AiOutlineSearch } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';    
const Form = () => {
    
    // Show Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // End show modal
    // add form elements
     const[formElement,setFormElement]=useState([
        { id: 1 },
     ])
     const addEntryClick = () => {
        setFormElement([...formElement, {id:++formElement.length}]);
    };
    // remove form elements
    const removeEntryClick = (id) => {
        if(formElement.length > 1){
            setFormElement(formElement.filter((item) => item.id !== id));
        }else{
            toast.error('عفوا ! لابد من التأكد من وجود معيار واحد علي الاقل')
        }
    }


    return (
        <>
        <ToastContainer />
            {/* Form section */}
            <form method='' action='' dir="rtl">
                <div className={`${classes.container}`}>
                    <div className={`${classes.flex_container}`}>
                        <div className={`${classes.form_label}`}>
                            <label htmlFor='product' className=''>المنتج</label>
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

                <div className={`${classes.container}`}>
                {formElement.map((item,index) => {
                     return (
                        <div className={`${classes.flex_container}`} key={item.id}>
                            <div className={`${classes.form_label}`}>
                                <label htmlFor='quality_1' className=''>{`معايير الجودة ${++index}`}</label>
                            </div>
                            {/* Form Inputs */}
                            <FormInput id={`quality_${item.id}`}  onAddHandler={addEntryClick}  onRemoveHandler={()=>removeEntryClick(item.id)} firstInputName={`quality_${item.id}`} secondInputName={`quality_${item.id}`}/>
                        </div>
                        );
                    })}
                    
                </div>
                <Button/>
            </form>
            {/* Modal */}
            <CardModal handleShow={show} handleClose={handleClose}/>
        </>
    );
};

export default Form;