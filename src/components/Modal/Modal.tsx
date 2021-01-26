import React, {ChangeEvent} from 'react';

// import { Container } from './styles';

import Modal from 'react-modal'

import {ModalContainer, Input,ButtonAdd} from './styles'

import { MdDoneAll } from 'react-icons/md'


interface ModalEdit {
    id?: number
    currentTask: string
    handleModal: () => void
    handleTask: (e: ChangeEvent<HTMLInputElement>) => void
    putTask: () => void
    modalStatus: boolean
}

const ModalComponent: React.FC<ModalEdit> = ({
    id,
    currentTask,
    handleModal,
    handleTask,
    putTask,
    modalStatus
}) => {
    return (
        <>
            <Modal
            isOpen={modalStatus}
                onRequestClose={handleModal}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        background: '#222',
                        color: '#000000',
                        borderRadius: '2px',
                        width: '300px',
                        border: 'none',
                    },
                    overlay: {
                        backgroundColor: '#121214e6',
                    },
                }}
            >
                <ModalContainer>
                        <h1
                            style={{
                                marginBottom: '10px',
                                color: "#fff"
                            }}
                        >
                            Edit note
                        </h1>
                        <Input
                            onChange={handleTask}
                        />
                        <ButtonAdd onClick={putTask}>
                            <MdDoneAll size={24} />
                        </ButtonAdd>
                </ModalContainer>
            </Modal>
        </>
    )
}

export default ModalComponent;