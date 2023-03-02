import axios from "axios";
import React, { useState, usee, useEffect } from "react";
import usersService from "../../services/usersService";
import { apiUrl } from "../../config/config.json";
import { SortableItem } from "react-sort-list";
import { ButtonWrapper, DeleteButton, DetailItem, EditButton, ListItem, MainContainer } from "./styles";
import EditModal from "../EditModal/EditModal";

const apiEndpoint = apiUrl + "/api";

function UsersTable() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [openModal, setOpenModal] = useState(false, null);
    const [selectedUser, setSelectedUser] = useState(null)

    useEffect(() => {
        usersService.getUsers().then(res => {
            setData(res);
            setIsLoading(false);
        })
    }, []);

    function handleUpdateData() {
        setIsLoading(true);
        usersService.getUsers().then((res) => {
            setData(res);
            setIsLoading(false);
        });
    }

    if (isLoading) return <h2>Loading...</h2>;

    return (
        <MainContainer>
            {openModal && <EditModal closeModal={setOpenModal} user={selectedUser} handleUpdateData={handleUpdateData} />}
            <ul>
                {data.map(function (user) {
                    return (
                        <SortableItem items={data} id={user._id} key={user._id} >
                            <ListItem>
                                <DetailItem >{user.name} </DetailItem>
                                <DetailItem >{user.email}</DetailItem>
                                <DetailItem >{user.age}</DetailItem>
                                <DetailItem >{user.gender}</DetailItem>
                                <DetailItem>
                                    <ButtonWrapper>
                                        <EditButton onClick={() => { setOpenModal(true); setSelectedUser(user); }}>Edit</EditButton>
                                    </ButtonWrapper>
                                    <ButtonWrapper>
                                        <DeleteButton>Delete</DeleteButton>
                                    </ButtonWrapper>
                                </DetailItem>
                            </ListItem>
                        </SortableItem>
                    );
                })}
            </ul>
        </MainContainer >
    );
}

export default UsersTable;
