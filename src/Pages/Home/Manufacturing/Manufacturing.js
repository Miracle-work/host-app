import React, { useEffect, useState } from 'react';
import NavBar from '../../../Components/NavBar/NavBar';
import BreadCrumbList from '../../../Components/Breadcrumb/BreadCrumbList';
import Toolbar from '../../../Components/Toolbar/Toolbar';
import useAxios from '../../../Hooks/useAxios';
import InsertForm from '../../../Components/InsertForm/InsertForm'
import DataTable from '../../../Components/DataTable/DataTable';
import classes from '../../../Components/DataTable/DataTable.module.scss'
import { ImArrowDown } from "react-icons/im";

const Manufacturing = () => {
    const {data,fetchError,isLoading}=useAxios('https://jsonplaceholder.typicode.com/users')   
    const [add,setAdd]=useState(false)
    const [clickColumn, setClickColumn]=useState(false)

    const onAddHandler=()=>{
        setAdd(true)
    } 
    const backHandler=()=>{
        setAdd(false)
        setClickColumn(false)
    } 
    const handleClickRow=()=>{
        setClickColumn(true)
    }
    const headers=[
        'الكود',
         <> الاسم <ImArrowDown className={classes.down_arrow_icon} /></>,
        'رقم الحساب',
    ]
    return (
        <div>
            <NavBar /> 
            <div className='d-flex justify-content-between container'>
                <BreadCrumbList breadCrumbTitle={'المجموعات الاساسية للتصنيع'} />
                <Toolbar addHandler={onAddHandler} clickColumn={clickColumn}/>
            </div>
            {
             (add || clickColumn) && 
            <InsertForm backHandler={backHandler}/>
            }
            {
            (!add || !clickColumn) &&   
            <DataTable data={data} headers={headers} fetchError={fetchError} isLoading={isLoading} handleClickColumn={handleClickRow}/>
            }
        </div>
    );
};

export default Manufacturing;