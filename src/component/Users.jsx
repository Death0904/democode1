import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Users = () => {
    const nav = useNavigate()
    const [user, setUser] = useState([])
    
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
                setUser(response.data);
            } catch (error) {

                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    console.log(user);
    const handleOnClick = (id) => {
        nav(`/users/${id}`)
    }
    return (
        <div className="py-2 container">
            <div className="row">
                <div className="col-12">
                    <h2 className="h2 fw-bold">Users</h2>
                </div>
                <div className="col-12">
                    <table className="table table-striped table-hover">
                        <thead className="">
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>username</th>
                                <th>email</th>
                                <th>phone</th>
                                <th>website</th>
                                <th>city</th>
                                <th>Company Name</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                user.map((u) => (
                                    <tr className="cursor-pointer" key={u.id} onClick={() => handleOnClick(u.id)}>
                                        <td>{u.id}</td>
                                        <td>{u.name}</td>
                                        <td>{u.username}</td>
                                        <td>{u.email}</td>
                                        <td>{u.phone}</td>
                                        <td>{u.website}</td>
                                        <td>{u.address.city}</td>
                                        <td>{u.company.name}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;