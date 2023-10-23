import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCheck } from 'react-icons/fa';

function ModalComponent({ show, setShow, justAccept = false }) {
    const handleClose = () => setShow(false);

    return (
        <React.Fragment>
            {justAccept &&
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <div className='modal__header'>
                            <FaCheck className='modal__header--icon' />
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Your order has been accepted</h4>
                        <p>transection ID: 89523595230</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className='modal__btn'>
                            <Button className='modal__btn--accept' onClick={handleClose}>
                                Continue Shopping
                            </Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            }
            {!justAccept &&
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>}
        </React.Fragment>
    )
}

export default ModalComponent
