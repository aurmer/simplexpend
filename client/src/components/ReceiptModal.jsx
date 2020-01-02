import React from 'react'

// import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import ReceiptImage from '../img/receipt.svg'

const ReceiptModal= () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <span>
      <img onClick={handleShow} className="receipt-icon" alt="receipt" src={ReceiptImage}></img>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h2>
            Receipt
          </h2>
        </Modal.Header>
        <Modal.Body
          className="receipt-image-container"
        >
          <img className="receipt-image" alt="receipt" src="https://cdn2.thecatapi.com/images/dub.jpg"></img>
        </Modal.Body>
      </Modal>
    </span>
  );
}

export default ReceiptModal
