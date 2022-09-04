import React, { useEffect } from 'react';
import NavBar from '../../../Components/NavBar/NavBar';
import BreadCrumbList from '../../../Components/Breadcrumb/BreadCrumbList';
import Toolbar from '../../../Components/Toolbar/Toolbar';
import useAxios from '../../../Hooks/useAxios';

const Manufacturing = () => {
    const {data,fetchError,isLoading}=useAxios('https://jsonplaceholder.typicode.com/users')
    return (
        <div>
            <NavBar/> 
            <div className='d-flex justify-content-between container'>
                <BreadCrumbList breadCrumbTitle={'المجموعات الاساسية للتصنيع'} />
                <Toolbar/>
            </div>
            <p>{isLoading && 'data is loading'}</p>
            <ul>
                    {data.map((item)=>{
                        return(
                            <li>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Manufacturing;