import axios from 'axios';

export const fetchPets = async (animal, location, breed) => {
  try {
    const response = await axios.get('http://pets-v2.dev-apis.com/pets', {
      params: { animal, location, breed },
    });
    return response.data.pets;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;
  }
};

export const fetchPetById = async (id) => {
  try {
    const response = await axios.get(`http://pets-v2.dev-apis.com/pets?id=${id}`);
    return response.data.pet;
  } catch (error) {
    console.error('Error fetching pet by ID:', error);
    throw error;
  }
};

export const fetchBreedsByAnimal = async (animal) => {
  try {
    const response = await axios.get(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
    return response.data.breeds || [];  
  } catch (error) {
    console.error('Error fetching breeds by animal:', error);
    return [];  
  }
};
