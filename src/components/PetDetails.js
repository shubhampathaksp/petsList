import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPetById } from '../services/api';

const PetDetails = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPet = async () => {
            try {
                setLoading(true);
                const petData = await fetchPetById(id);
                setPet(petData);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadPet();
    }, [id]);

    if (loading) {
        return <div className="text-center text-lg">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error loading pet details: {error.message}</div>;
    }

    if (!pet) {
        return <div className="text-center text-lg">Pet not found.</div>;
    }

    return (
        <div className="pet-details max-w-xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{pet.name}</h1>
            <p className="mb-2"><strong>Breed:</strong> {pet.breed}</p>
            <p className="mb-2"><strong>Animal:</strong> {pet.animal}</p>
            <p className="mb-2"><strong>Location:</strong> {pet.location}</p>
            <p className="mb-2"><strong>Description:</strong> {pet.description}</p>
        </div>
    );
};

export default PetDetails;
