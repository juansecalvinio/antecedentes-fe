import React from 'react'
import { Button, Modal } from 'react-bootstrap';

const CustomModal = ({ active, title, body, onCancel, onSuccess }) => (
    <Modal show={active} onHide={onCancel}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>{body}</p>
        </Modal.Body>

        <Modal.Footer>
            <Button onClick={onCancel} variant="secondary">No</Button>
            <Button onClick={onSuccess} variant="primary">Si</Button>
        </Modal.Footer>
    </Modal>
)

export default CustomModal;
