import React from 'react';
// Bootstrap Components
import { Container } from 'react-bootstrap';
// End Of Bootstrap Components

import classes from './BreadCrumbList.module.scss';

const BreadCrumbList = () => {
    return (
        <Container>
            <nav>
                <ol className={`breadcrumb ${classes.breadcrumb_wrapper}`}>
                    <li className={`breadcrumb-item ${classes.breadcrumb_list_item}`} aria-current="page">
                        تكويد معايير الجودة
                    </li>
                    <li className={` breadcrumb-item ${classes.breadcrumb_list_item}`}>
                        <a href='#'>الصفحة الرئيسية</a>
                    </li>
                </ol>
            </nav>
        </Container >
    );
};

export default BreadCrumbList;