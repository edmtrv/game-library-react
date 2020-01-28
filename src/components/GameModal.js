import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const GameModal = ({ modal, toggle }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <form>
          <ModalBody>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                placeholder="Enter Title"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                name="genre"
                id="genre"
                className="form-control"
                placeholder="Enter Genre"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                className="form-control"
                placeholder="In €"
                step="0.01"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="sescription"
                rows="3"
                className="form-control"
                placeholder="Enter Description"
                required
              ></textarea>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Add Game
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};

export default GameModal;
