import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const readComment = async () => {
    try {
        const response = await axios.get(`${API_URL}/komentar`);
        return response.data;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
    }
};

export const readCommentPage = async (page) => {
    try {
        const response = await axios.get(`${API_URL}/komentar/${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
    }
};

export const addComment = async (page, data) => {
    try {
        const response = await axios.post(`${API_URL}/komentar/tambah/${page}`, data);
        return response.data;
    } catch (error) {
        console.error('Failed to add comment:', error);
        throw new Error('Unable to add comment. Please try again later.');
    }
};

export const updateStatusComment = async (id, status) => {
    try {
        const response = await axios.put(`${API_URL}/komentar/${id}/${status}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to update the status of comment with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to update the comment status. Please try again later.');
    }
};
