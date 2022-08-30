import React from 'react';
import NavBar from '../../../Components/NavBar/NavBar';
import BreadCrumbList from '../../../Components/Breadcrumb/BreadCrumbList';

const Manufacturing = () => {
    return (
        <div>
            <NavBar/> 
            <BreadCrumbList breadCrumbTitle={'المجموعات الاساسية للتصنيع'}/>
        </div>
    );
};

export default Manufacturing;