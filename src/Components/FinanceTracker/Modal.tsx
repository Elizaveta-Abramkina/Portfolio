import React, {MouseEventHandler} from "react";
import ReactDOM from "react-dom";


const modalNode = document.getElementById("modalNode") as HTMLElement

type ModalProps = {
    isOpen: boolean
    onClose: MouseEventHandler<HTMLButtonElement> | undefined
}
const Modal = ({isOpen, onClose}:ModalProps)=> {
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div className="modal">
            <p>Kakoy-to text</p>
            <button onClick ={onClose}>Close</button>
        </div>, modalNode
    )
}
export default Modal;

