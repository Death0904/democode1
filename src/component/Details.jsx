import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Phote from './Phote';
const Details = () => {
    const [user, setUser] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                setUser(response.data);
                setEditedUser(response.data); // Initialize edited user with fetched data
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [id]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        // Here you would typically make an API call to save the edited user data
        setUser(editedUser)
        console.log("Saving changes:", editedUser);
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };
    return (
        <div className='container'>
            <div className="col-12">
                <div className="mb-4 row">
                    <div className="col-6">
                        <h2 className="h2 fw-bold">{user.name}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex flex-column gap-4">
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="h4 text-info">Personal:</h4>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-lg-3 col-4">
                                            <p className="mb-0">Id:</p>
                                        </div>
                                        <div className="col-lg-9 col-8">
                                            <p className="mb-0 fw-bold">{user.id}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-4">
                                            <p className="mb-0">Username:</p>
                                        </div>
                                        <div className="col-lg-9 col-8">
                                            <p className="mb-0 fw-bold">{user.username}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <h4 className="h4 text-info">Address:</h4>
                                </div>
                                <div className="col-12">
                                    <div className="row"><div className="col-lg-3 col-4">
                                        <p className="mb-0">Street:</p>
                                    </div>
                                        <div className="col-lg-9 col-8">
                                            <p className="mb-0 fw-bold">{user.address?.street}</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-4"><p className="mb-0">Suite:</p>
                                        </div>
                                        <div className="col-lg-9 col-8">
                                            <p className="mb-0 fw-bold">{user.address?.suite}</p>
                                        </div></div>
                                    <div className="row">
                                        <div className="col-lg-3 col-4">
                                            <p className="mb-0">City:</p>
                                        </div>
                                        <div className="col-lg-9 col-8">
                                            <p className="mb-0 fw-bold">{user.address?.city}</p></div>
                                    </div>
                                    <div className="row"><div className="col-lg-3 col-4">
                                        <p className="mb-0">Zipcode:</p>
                                    </div>
                                        <div className="col-lg-9 col-8">
                                            <p className="mb-0 fw-bold">{user.address?.zipcode}</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row"><div className="col-12">
                                <h4 className="h4 text-info">Company:</h4>
                            </div>
                                <div className="col-12"><div className="row">
                                    <div className="col-lg-3 col-4">
                                        <p className="mb-0">Name:</p>
                                    </div>
                                    <div className="col-lg-9 col-8">
                                        <p className="mb-0 fw-bold">{user.company?.name}</p>
                                    </div>
                                </div>
                                    <div className="row">
                                        <div className="col-lg-3 col-4">
                                            <p className="mb-0">CatchPhrase:</p>
                                        </div>
                                        <div className="col-lg-9 col-8">
                                            <p className="mb-0 fw-bold">{user.company?.catchPhrase}</p>
                                        </div>
                                    </div>
                                    <div className="row"><div className="col-lg-3 col-4"><p className="mb-0">Bs:</p></div>
                                        <div className="col-lg-9 col-8">
                                            <p className="mb-0 fw-bold">{user.company?.bs}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="row">
                                <div className="col-6">
                                    <div className="d-flex flex-column gap-4">
                                        <div className="row">
                                            <div className="col-12">
                                                <h4 className="h4 text-info">Contact:</h4>
                                            </div>
                                            <div className="mb-2 col-12">
                                                {isEditing ? (
                                                    <>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-4">
                                                                <label>Email:</label>
                                                            </div>
                                                            <div className="col-lg-9 col-8">
                                                                <input
                                                                    type="text"
                                                                    name="email"
                                                                    value={editedUser.email || ''}
                                                                    onChange={handleInputChange}
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-4">
                                                                <label>Website:</label>
                                                            </div>
                                                            <div className="col-lg-9 col-8">
                                                                <input
                                                                    type="text"
                                                                    name="website"
                                                                    value={editedUser.website || ''}
                                                                    onChange={handleInputChange}
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-4">
                                                                <label>Phone:</label>
                                                            </div>
                                                            <div className="col-lg-9 col-8">
                                                                <input
                                                                    type="text"
                                                                    name="phone"
                                                                    value={editedUser.phone || ''}
                                                                    onChange={handleInputChange}
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-4">
                                                                <p className="mb-0">Email:</p>
                                                            </div>
                                                            <div className="col-lg-9 col-8">
                                                                <p className="mb-0 fw-bold">{user.email}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-4">
                                                                <p className="mb-0">Website:</p>
                                                            </div>
                                                            <div className="col-lg-9 col-8">
                                                                <p className="mb-0 fw-bold">{user.website}</p>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-4">
                                                                <p className="mb-0">Phone:</p>
                                                            </div>
                                                            <div className="col-lg-9 col-8">
                                                                <p className="mb-0 fw-bold">{user.phone}</p>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        {isEditing ? (
                                            <div >
                                                <button type="button" className="btn btn-success" onClick={handleSaveClick}>Submit</button>
                                                {' '}
                                                <button type="button" className="btn btn-danger">Reset</button>
                                            </div>
                                        ) : (
                                            <button type="button" className="btn btn-success" onClick={handleEditClick}>Edit</button>
                                        )}

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Phote id={id} />
            </div>

        </div>

    );
};

export default Details;