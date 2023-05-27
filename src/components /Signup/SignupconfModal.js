
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './SignupconfModal.css';
import{Link} from 'react-router-dom';
function SignupconfModal(props) {

    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.hide}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <h3 style={{display:'block',marginRight:'30px'}}>successfully registered</h3>
             */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                        <button class="buttonload">
                            <i class="fa fa-spinner fa-spin"></i>Loading
                        </button>
                </Modal.Body>
                <Modal.Footer>
                    <Link to = '/'><Button variant="primary"> back to login </Button></Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default SignupconfModal;