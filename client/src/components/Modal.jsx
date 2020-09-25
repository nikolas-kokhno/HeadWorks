import React from 'react';
import { Link } from 'react-router-dom';

/* Modal Material UI */
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

export const ModalWindow = ({ open, handleClose, error, errorStatus }) => {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="modal"
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className="modal__paper">
                    <div className="modal__header">
                        <h2 id="transition-modal-title">
                            {errorStatus ? 'Error' : 'Success'}
                        </h2>
                        <span onClick={handleClose}>x</span>
                    </div>
                    <div className="modal__body">
                        {error === '' ? 'The user successfully passed the registration' : error}
                    </div>
                    <div className="modal__footer">
                        <Link to="/" className="modal__footer-btn">
                            <Button color="primary" variant="contained">
                                Пользователи
                            </Button>
                        </Link>
                    </div>
                </div>
            </Fade>
        </Modal>
    )
}