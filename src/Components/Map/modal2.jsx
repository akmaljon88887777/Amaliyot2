import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import Rasm2 from '../../assets/templatemo_thumb_2.jpg'
import './style.css'
function Modal2({ show, handleClose }) {

    return (
        <div>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Button style={{ color: 'black', fontSize:'20px',fontWeight:'700'}} variant="secondary" color='primary' onClick={handleClose}>
              &times;
            </Button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={Rasm2} alt="rasm" style={{ width: '100%' }} />
        </Modal.Body>
      </Modal>
        </div>
    )
}

export default Modal2