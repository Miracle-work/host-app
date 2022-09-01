import React from 'react';
import NavBar from '../../../Components/NavBar/NavBar';
import BreadCrumbList from '../../../Components/Breadcrumb/BreadCrumbList';
import Toolbar from '../../../Components/Toolbar/Toolbar'

const Manufacturing = () => {
    return (
        <div>
            <NavBar/> 
            <div className='d-flex justify-content-between container'>
                <BreadCrumbList breadCrumbTitle={'المجموعات الاساسية للتصنيع'} />
                <Toolbar/>
            </div>
        </div>
    );
};

export default Manufacturing;