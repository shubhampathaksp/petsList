

import axios from 'axios';

const API_URL = 'http://pets-v2.dev-apis.com';

export const fetchPets = async (animal, location, breed) => {
  try {
    const response = await axios.get(`${API_URL}/pets`, {
      params: { animal, location, breed }
    });
    return response.data.pets;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;
  }
};

export const fetchPetById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/pets`, { params: { id } });
    return response.data.pets[0]; // Assuming the API returns an array for the ID
  } catch (error) {
    console.error('Error fetching pet by ID:', error);
    throw error;
  }
};

export const fetchBreedsByAnimal = async (animal) => {
  try {
    const response = await axios.get(`${API_URL}/breeds`, { params: { animal } });
    return response.data.breeds || []; 
  } catch (error) {
    console.error('Error fetching breeds by animal:', error);
    return []; 
  }
};
