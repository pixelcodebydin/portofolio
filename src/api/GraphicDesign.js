import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const readGraphicDesign = async () => {
    try {
        const response = await axios.get(`${API_URL}/graphicDesign`);
        return response.data;
    } catch (error) {
        console.error('Error fetching designs:', error);
        throw error;
    }
};

export const updateStatusGraphicDesign = async (id, status) => {
    try {
        const response = await axios.put(`${API_URL}/graphicDesign/${id}/${status}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to update the status of design with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to update the design status. Please try again later.');
    }
};
