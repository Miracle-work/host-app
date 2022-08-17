import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import classes from './UiCard.module.scss';
const UiCard = (props) => {
    return (
            <Card className={` shadow shadow-sm  mx-auto d-block mt-4 ${classes.card}`}>
                {props.children}
            </Card>
    );
};

export default UiCard;