import React, {ReactPortal} from "react";
import ReactDOM from "react-dom";
import "../../styles/SignUpModal.css"
import {MouseEventHandler} from "react";

const modalNode = document.getElementById('modalNode') as HTMLElement

type ModalProps = {
    isOpen: boolean
    onClose: MouseEventHandler<HTMLDivElement> | undefined
}

const SignUpModal = ({isOpen, onClose}: ModalProps): null | ReactPortal => {
    if (!isOpen) return null;
    return (
        ReactDOM.createPortal(
            <div className="sign-up-modal" onClick={onClose}>
                <div className="sign-up-form" onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <h3 className="sign-up-form__title text_type_title">Sign Up</h3>
                    <form className="sign-up-form__form" id="sign-up-form">
                        <label className="sign-up-form__label text_type_simple" htmlFor="name">Name</label>
                        <input className="sign-up-form__input text_type_simple" type="text" id="name" name="name"/>
                        <label className="sign-up-form__label text_type_simple" htmlFor="login">E-mail</label>
                        <input className="sign-up-form__input text_type_simple" type="email" id="login" name="email"/>
                        <label className="sign-up-form__label text_type_simple" htmlFor="password">Password</label>
                        <input className="sign-up-form__input text_type_simple" type="password" id="password"
                               name="password"/>
                    </form>
                    <button className="sign-up-form__button text_type_accent" type="submit" form="sign-up-form">Submit</button>
                </div>
            </div>,
            modalNode)
    )
}

export default SignUpModal;