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
    const [formData,setFormData]=useState([])
    const [clickColumn, setClickColumn]=useState([])
    const [selectedRow,setSelectedRow]=useState([])
    const onAddHandler=()=>{
        setAdd(true)
    } 
    const backHandler=()=>{
        setAdd(false)
        setClickColumn(false)
    } 
    const handleClickRow=(data)=>{
        setSelectedRow(
            {
                'id':data.id,
                'name':data.name,
                'email':data.email,
                'city':data.address.city,
            }
        )
        setClickColumn({
            clicked:true,
            data: {
                'id':data.id,
                'name':data.name,
                'email':data.email,
                'city':data.address.city,
            }
        })
    }

    const editHandler=(data)=>{
        setFormData(data)
        setAdd(true)
    }

    const headers=[
        'الكود',
         <> الاسم <ImArrowDown className={classes.down_arrow_icon} /></>,
        'رقم الحساب',
    ]
    return (
        <div>
            <div className='d-flex justify-content-between container'>
                <BreadCrumbList breadCrumbTitle={'المجموعات الاساسية للتصنيع'} />
                <Toolbar editHandler={editHandler} addHandler={onAddHandler} addNew={add} clickColumn={clickColumn} selectedRowData={selectedRow}/>
            </div>
            {
             add  && 
            <InsertForm backHandler={backHandler} returnedRowData={formData}/>
            }
            {
            (!add || !clickColumn) &&   
            <DataTable 
             selectedRow={selectedRow} 
             data={data} headers={headers}
             fetchError={fetchError} isLoading={isLoading} handleClickRow={handleClickRow}/>
            }
        </div>
    );
};

export default Manufacturing;