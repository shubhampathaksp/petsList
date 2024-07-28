import React, { useState, useEffect } from 'react';
import { fetchBreedsByAnimal } from '../services/api';

const SearchForm = ({ onSearch }) => {
    const [animal, setAnimal] = useState('');
    const [location, setLocation] = useState('');
    const [breed, setBreed] = useState('');
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        const loadBreeds = async () => {
            if (animal) {
                const breedsData = await fetchBreedsByAnimal(animal);
                setBreeds(breedsData);
            } else {
                setBreeds([]);
            }
        };

        loadBreeds();
    }, [animal]);

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch({ animal, location, breed });
    };

    return (
        <form onSubmit={handleSearch} className="search-form p-4 bg-gray-100 rounded-lg">
            <div className="mb-4">
                <label htmlFor="animal" className="block text-sm font-medium">Animal</label>
                <input
                    id="animal"
                    value={animal}
                    onChange={e => setAnimal(e.target.value)}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium">Location</label>
                <input
                    id="location"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    className="mt-1 p-2 block w-full border rounded-md"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="breed" className="block text-sm font-medium">Breed</label>
                <select
                    id="breed"
                    value={breed}
                    onChange={e => setBreed(e.target.value)}
                    disabled={!breeds.length}
                    className="mt-1 p-2 block w-full border rounded-md"
                >
                    <option value="">Select Breed</option>
                    {breeds.length > 0 ? (
                        breeds.map(breed => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))
                    ) : (
                        <option disabled>Loading breeds...</option>
                    )}
                </select>
            </div>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">Search</button>
        </form>
    );
};

export default SearchForm;
