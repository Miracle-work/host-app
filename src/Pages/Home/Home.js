import React from 'react';
import BreadCrumbList from '../../Components/Breadcrumb/BreadCrumbList';
import UiCard from '../../Components/UI/Card/UiCard';
import Form from '../../Components/Form/Form'
const Home = () => {
    return (
        <div>
            <BreadCrumbList breadCrumbTitle={'تكويد معايير الجودة'}/> 
            <UiCard>
                <Form />
            </UiCard>     
        </div>
    );
};

export default Home;