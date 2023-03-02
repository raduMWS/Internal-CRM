import React from 'react'
import { ModalBackground, ModalContainer, Title } from './styles'
import { useState, setState, setValue } from 'react';
import usersService from '../../services/usersService';


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
                    <h1 text-color='black'>title</h1>
                </Title>
                <input type="text" name="name" value={user.name} onChange={handleInputChange}></input>
                <input type="text" name="email" value={user.email} onChange={handleInputChange}></input>
                <input type="text" name="age" value={user.age} onChange={handleInputChange}></input>
                <input type="text" name="gender" value={user.gender} onChange={handleInputChange}></input>

                <div className='footer'>
                    <button onClick={() => closeModal(false)}>Cancel</button>
                    <button onClick={() => { handleSave() }}>Save</button>
                </div>
            </ModalContainer>
        </ModalBackground >
    )
}

export default EditModal