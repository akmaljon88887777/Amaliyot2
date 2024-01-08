import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import Rasm4 from '../../assets/templatemo_thumb_4.jpg'
import './style.css'
function Modal4({ show, handleClose }) {

    return (
        <div className=''>
            <Modal show={show} onHide={handleClose} style={{display:'flex'}}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Button style={{ color: 'black', fontSize:'20px',fontWeight:'700'}} variant="secondary" color='primary' onClick={handleClose}>
                            &times;
                        </Button> 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={Rasm4} alt="rasm" style={{ width: '100%' }} />
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Modal4