import { useState } from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import UserForm from './Form';

function AppModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="App-modal-button" variant="primary" onClick={handleShow}>
          Add new User
      </Button>
      
      <Modal className="App-modal" show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Create new User</Modal.Title>
        </Modal.Header>
          <UserForm />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back to list
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AppModal;