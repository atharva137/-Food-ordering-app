import React from 'react';
import './Modal.css';

function BackDrop(props){
    return (
        <div className="backdrop"></div>
    );
}

function ModalOverlay(props){
    return (
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    );
}

function Modal(props){

    return(
        <React.Fragment>
        <BackDrop></BackDrop>
        <ModalOverlay>{props.children}</ModalOverlay>
        </React.Fragment>
    );
}

export default Modal;