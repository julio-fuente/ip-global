 import React, { useState, Component } from "react"
import { Modal, Button } from 'react-bootstrap'

interface Props{
    show?:Boolean;
    onHide?:Boolean
}

class ModalsInfoFrorm extends Component <Props>{
    public static defaultProps = {
        show: false,
        onHide:false
      };
    componentDidMount = () => { }

    render() {
     /*    const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);   */
        return   <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
      }
}
export default ModalsInfoFrorm;