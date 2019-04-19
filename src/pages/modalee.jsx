
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  render() {
    return (
      <div>
       
        <Modal isOpen={this.props.isOpen} toggle={() => this.props.toogleAction()} className={this.props.className}>
          <ModalHeader toggle={() => this.props.toogleAction()}>Refus catégorique</ModalHeader>
          <ModalBody>
            Tu es tres decevant mec
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.toogleAction()}>Errrrrooooor</Button>{' '}
          
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;