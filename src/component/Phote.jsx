import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Phote = ({ id }) => {
    const [albums, setAlbums] = useState([]);
    const [newAlbumTitle, setNewAlbumTitle] = useState('');
    useEffect(() => {
        const fetchAlbumData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
                setAlbums(response.data);
            } catch (error) {
                console.error('Error fetching album data:', error);
            }
        };

        fetchAlbumData();
    }, [id]);

    const handleNewAlbumSubmit = (e) => {
        e.preventDefault();
        if (newAlbumTitle.trim() === '') {
            alert('Please enter a title for the new album.');
            return;
        }

        const newAlbum = {
            id: albums.length + 1, // Generate a unique ID
            userId: id,
            title: newAlbumTitle
        };

        setAlbums(prevAlbums => [...prevAlbums, newAlbum]);
        setNewAlbumTitle(''); // Clear the input field after adding the album
    };
    return (
        <div>
        <div className="col-12">
            <div className="border-top pt-3 mb-3 row">
                <div className="col-8">
                    <h4 className="h4">Photo Albums: </h4>
                </div>
            </div>
            <div className="mb-3 row">
                <div className="col-6">
                    <form className="d-flex items-center gap-3" onSubmit={handleNewAlbumSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title of new album"
                            value={newAlbumTitle}
                            onChange={(e) => setNewAlbumTitle(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="flex-shrink-0 w-25 btn btn-success btn-lg"
                        >
                            New Album
                        </button>
                    </form>
                </div>
            </div>
            <div className="row">
                {albums.map((album,index) => (
                    <div key={album.id} className="mb-3 col-md-6">
                        <div className="d-flex items-center justify-content-between border rounded text-decoration-none text-black">
                            <div className="py-2 flex-shrink-0 border-end d-flex items-center justify-content-center w-10">{index+1}</div>
                            <div className="py-2 w-100 px-4 text-truncate fw-bold text-start">{album.title}</div>
                            <div className="text-center flex-shrink-0 w-10 py-2">
                                <button type="button" className="btn btn-danger btn-sm">X</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default Phote;
