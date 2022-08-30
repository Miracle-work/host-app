import {React,useContext,useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import classes from './Login.module.scss';
import AuthContext from '../../Store/Auth-Context'

const Form = (props) => {
    const usernameInputRef=useRef();
    const passwordInputRef=useRef();
    const [isLoading, setIsLoading]=useState(false);
    const authContext= useContext(AuthContext)
    const navigate=useNavigate()
    const [submitError,setSubmitError]=useState()
    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredUserName=usernameInputRef.current.value;
        const enteredPassword=passwordInputRef.current.value;
        setIsLoading(true)
        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB2sZ3Va0wwkASPjq4nB_0xS5L-yIiLnOs',
            {
                method:'POST',
                body:JSON.stringify({
                    email:enteredUserName,
                    password:enteredPassword,
                    returnSecureToken:true
                }),
                headers:{
                    'Content-Type': 'application/json'
                },
            }
        ).then((res)=>{
            setIsLoading(false)
            if(res.ok){
                return res.json()
            }else{
                return res.json().then((data)=>{
                    let errorMessage='Authantication Failed'
                    setSubmitError(props.onError(errorMessage))
                })
            }
        }).then((data)=>{
            authContext.login(data.idToken,3600000)
            navigate('/dashboard')
        })
    }
    return (
        <>
            
            <form onSubmit={submitHandler}>
                <div className={`row ${classes.col_wrapper}`}>
                    <div className='col-md-12'>
                    <FaEnvelope className={classes.icon}/>
                    <input className={`form-control ${classes.input_field}`} ref={usernameInputRef} type="text" placeholder='اسم المستخدم'/>
                    </div>
                </div>
                <div className={`row ${classes.col_wrapper}`}>
                    <div className='col-md-12'>
                    <HiLockClosed className={classes.icon}/>
                    <input className={`form-control ${classes.input_field}`} ref={passwordInputRef} type="password" placeholder='كلمة المرور'/>
                    </div>
                </div>
                <div className={`row ${classes.col_wrapper}`}>
                    <div className='col-md-6'>
                        <input className={`form-control`} type="submit"/>
                    </div>

                    <div className='col-md-6'>
                        {!isLoading ? 
                            <input className={`${classes.submit_btn}`} type="submit" value='الدخول'/> :
                            <input className={`${classes.submit_btn}`} type="submit" disabled  value='Loading ....'/>
                        }
                    </div>
                </div>
            </form>
        </>    
    );
};

export default Form;