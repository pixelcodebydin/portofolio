import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const readIllustration = async () => {
    try {
        const response = await axios.get(`${API_URL}/ilustrasi`);
        return response.data;
    } catch (error) {
        console.error('Error fetching illustration categories:', error);
        throw error;
    }
};

export const updateStatusIllustration = async (id, status) => {
    try {
        const response = await axios.put(`${API_URL}/ilustrasi/${id}/${status}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to update the status of illustration category with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to update the illustration category status. Please try again later.');
    }
};
