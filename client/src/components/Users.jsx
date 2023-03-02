import { useState, useEffect } from "react";
import usersService from "../services/usersService";


function Users() {
    const [usersData, setUsersData] = useState();

    useEffect(() => {
        fetchUsers();
        async function fetchUsers() {
            const result = await usersService.getUsers();
            console.log("users = " + result);
            setUsersData(result);
        }
    }, []);


    return (
        <div className="Users">
            <div>
                <p>Hello Radu! This is a test</p>

            </div>
            {/* {usersData && <h1>{usersData}</h1>} */}
            <div>
                {usersData && usersData.map((user, index) => {
                    return (
                        <div>name: {user.name} </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Users;
