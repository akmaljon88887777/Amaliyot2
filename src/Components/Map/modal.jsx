import { Modal, Button } from 'react-bootstrap';
import Rasm from '../../assets/templatemo_thumb_1.jpg'
import './style.css'
function Modals({ show, handleClose }) {


  return (
    <div className='flex justify-center items-center'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Button style={{ color: 'black', fontSize:'25px',fontWeight:'700'}} variant="secondary" color='primary' onClick={handleClose}>
              &times;
            </Button>
          </Modal.Title>
        </Modal.Header>
        <div className='flex justify-center items-center'>
          <Modal.Body>
            <img src={Rasm} alt="rasm" style={{ width: '100%' }} />
          </Modal.Body>
        </div>
      </Modal>
    </div>
  )
}

export default Modals;