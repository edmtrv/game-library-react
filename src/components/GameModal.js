import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class GameModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: '', genre: '', price: '', description: '' };
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
          <form onSubmit={this.onFormSubmit}>
            <ModalBody>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  onChange={e => this.setState({ title: e.target.value })}
                  value={this.state.title}
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
                  onChange={e => this.setState({ genre: e.target.value })}
                  value={this.state.genre}
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
                  onChange={e => this.setState({ price: e.target.value })}
                  value={this.state.price}
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
                  onChange={e => this.setState({ description: e.target.value })}
                  value={this.state.description}
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
              <Button color="primary" type="submit" onClick={this.props.toggle}>
                Add Game
              </Button>{' '}
              <Button color="secondary" onClick={this.props.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default GameModal;
