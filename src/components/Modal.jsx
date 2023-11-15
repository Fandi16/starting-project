import clasess from './Modal.module.css';

function Modal ( { children } )
{
    return (
        <>
            <div className={ clasess.backdrop } />
            <dialog open className={ clasess.modal }>{ children }</dialog>
        </>
    );
}

export default Modal;