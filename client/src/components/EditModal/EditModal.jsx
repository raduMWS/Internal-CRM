import React from 'react'
import { InfoLabel, ModalBackground, ModalContainer, ModalInfoRow, Title } from './styles'
import { useState, setState, setValue } from 'react';
import usersService from '../../services/usersService';
import { GreenButton, RedButton } from '../UsersTable/styles';


function EditModal({ closeModal, user, handleUpdateData }) {
    const [updatedUser, setUpdatedUser] = useState(user);
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        updatedUser[name] = value;
        setUpdatedUser(updatedUser)
        setMessage(value);
    };

    async function UpdateUser(user) {
        usersService.updateUser(user).then((res) => {
            console.log(JSON.stringify(user) + " Saved");
            handleUpdateData();
            closeModal(false);
        })
    }

    async function handleSave() {
        UpdateUser(updatedUser)
    }

    return (
        <ModalBackground>
            <ModalContainer>
                <Title>
                    <h1 >User</h1>
                </Title>
                <ModalInfoRow>
                    <InfoLabel>Name</InfoLabel>
                    <input type="text" name="name" value={user.name} onChange={handleInputChange}></input>
                </ModalInfoRow>
                <ModalInfoRow>
                    <InfoLabel>Email</InfoLabel>
                    <input type="text" name="email" value={user.email} onChange={handleInputChange}></input>
                </ModalInfoRow>
                <ModalInfoRow>
                    <InfoLabel>Age</InfoLabel>
                    <input type="text" name="age" value={user.age} onChange={handleInputChange}></input>
                </ModalInfoRow>
                <ModalInfoRow>
                    <InfoLabel>Gender</InfoLabel>
                    <input type="text" name="gender" value={user.gender} onChange={handleInputChange}></input>
                </ModalInfoRow>

                <div className='footer'>
                    <RedButton onClick={() => closeModal(false)}>Cancel</RedButton>
                    <GreenButton onClick={() => { handleSave() }}>Save</GreenButton>
                </div>
            </ModalContainer>
        </ModalBackground >
    )
}

export default EditModal