import axios from "axios";
import React, { useState, usee, useEffect } from "react";
import usersService from "../../services/usersService";
import { apiUrl } from "../../config/config.json";
import { SortableItem } from "react-sort-list";
import { ButtonWrapper, RedButton, DetailItem, GreenButton, Footer, ListItem, MainContainer, ListContainer } from "./styles";
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

    function deleteUser(user) {
        setIsLoading(true);
        usersService.deleteUser(user).then(res => {
            handleUpdateData()
            setIsLoading(false);
        })
    }

    if (isLoading) return <h2>Loading...</h2>;

    return (
        <MainContainer>
            {openModal && <EditModal closeModal={setOpenModal} user={selectedUser} handleUpdateData={handleUpdateData} />}
            <ListContainer>
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
                                        <GreenButton onClick={() => { setOpenModal(true); setSelectedUser(user); }}>Edit</GreenButton>
                                    </ButtonWrapper>
                                    <ButtonWrapper>
                                        <RedButton onClick={() => { setSelectedUser(user); deleteUser(user) }}>Delete</RedButton>
                                    </ButtonWrapper>
                                </DetailItem>
                            </ListItem>
                        </SortableItem>
                    );
                })}
            </ListContainer>
            <Footer>
                <GreenButton onClick={() => { setOpenModal(true); setSelectedUser({}) }}> Add new user</GreenButton>
            </Footer>
        </MainContainer >

    );
}

export default UsersTable;
