import React from 'react';
import { Modal, Button } from "react-bootstrap";

const CardModal = (props) => {
    return (
        <Modal show={props.handleShow} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal Body!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CardModal;