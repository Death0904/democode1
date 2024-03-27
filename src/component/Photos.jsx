import React, { useState, useEffect } from 'react';

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedAlbumId, setSelectedAlbumId] = useState('');

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                let url = `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`;
                if (selectedAlbumId) {
                    url += `&albumId=${selectedAlbumId}`;
                }
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setPhotos(prevPhotos => [...prevPhotos, ...data]);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, [page, selectedAlbumId]);

    const loadMorePhotos = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handleSearchChange = event => {
        setSearchQuery(event.target.value);
    };

    const handleSelectChange = event => {
        setSelectedAlbumId(event.target.value);
    };

    const filteredPhotos = photos.filter(photo =>
        photo.id.toString().includes(searchQuery)
    );

    return (
        <div className="py-2 container">
            <div className="row">
                <div className="col-12">
                    <h2 className="h2 fw-bold">Photos</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <form className="d-flex items-center gap-2">
                        <div>
                            <select
                                className="form-select"
                                value={selectedAlbumId}
                                onChange={handleSelectChange}
                            >
                                <option value="">Albums Id</option>
                            </select>
                        </div>
                        <div>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by photo ID"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                </div>
            </div>
            <br></br>
            <div className="row">
                {filteredPhotos.map(photo => (
                    <div key={photo.id} className="mb-4 col-3">
                        <div className="w-100 card">
                            <img className="card-img-top" src={photo.url} alt={photo.title} />
                            <div className="card-body">
                                <div className="w-full text-truncate card-title h5">{photo.title}</div>
                                <p className="mb-1 card-text">Id: #{photo.id}</p>
                                <p className="card-text">Album Id: #{photo.albumId}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="w-100 text-center">
                        <button type="button" className="btn btn-primary" onClick={loadMorePhotos}>Load more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photos;
