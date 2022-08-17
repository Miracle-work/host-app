import React from 'react';
import BreadCrumbList from '../../Components/Breadcrumb/BreadCrumbList';
import UiCard from '../../Components/UI/Card/UiCard';
import NavBar from '../../Components/NavBar/NavBar';
import Form from '../../Components/Form/Form'
const Home = () => {
    return (
        <div>
            <NavBar/> 
            <BreadCrumbList/> 
            <UiCard>
                <Form />
            </UiCard>     
        </div>
    );
};

export default Home;