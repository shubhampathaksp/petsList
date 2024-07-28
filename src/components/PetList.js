import React, { useEffect, useState } from 'react';
import { fetchPets } from '../services/api';
import { Link } from 'react-router-dom';

const PetList = ({ animal, location, breed }) => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPets = async () => {
            try {
                setLoading(true);
                const petsData = await fetchPets(animal, location, breed);
                setPets(petsData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadPets();
    }, [animal, location, breed]);

    if (loading) {
        return <div className="text-center text-lg">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error loading pets: {error.message}</div>;
    }

    if (pets.length === 0) {
        return <div className="text-center text-lg">No pets found.</div>;
    }

    return (
        <div className="pet-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {pets.map(pet => (
                <Link to={`/pets/${pet.id}`} key={pet.id} className="pet-item border p-4 rounded-lg hover:bg-gray-100 transition">
                    <h2 className="text-xl font-bold">{pet.name}</h2>
                    <p>{pet.breed}</p>
                </Link>
            ))}
        </div>
    );
};

export default PetList;
