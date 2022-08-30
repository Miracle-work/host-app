import React from 'react';
import NavBar from '../../../Components/NavBar/NavBar';
import BreadCrumbList from '../../../Components/Breadcrumb/BreadCrumbList';

const Assets = () => {
    return (
        <div>
            <NavBar/> 
            <BreadCrumbList breadCrumbTitle={'المجموعات الاساسية للتصنيع'}/>
        </div>
    );
};

export default Assets;