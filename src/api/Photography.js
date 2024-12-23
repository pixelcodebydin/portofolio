import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const readPhotography = async () => {
    try {
        const response = await axios.get(`${API_URL}/photography`);
        return response.data;
    } catch (error) {
        console.error('Error fetching photos:', error);
        throw error;
    }
};

export const updateStatusPhotography = async (id, status) => {
    try {
        const response = await axios.put(`${API_URL}/photography/${id}/${status}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to update the status of photo with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to update the photo status. Please try again later.');
    }
};

export const addPhotography = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/photography/tambah`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to add the photo:', error.response?.data || error.message);
        throw new Error(error.response?.data?.error || 'Unable to add the photo. Please try again later.');
    }
};

export const deletePhotography = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/photography/hapus/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete photo with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to delete photo. Please try again later.');
    }
};
