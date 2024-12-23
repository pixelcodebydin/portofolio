import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const countMenu = async () => {
    try {
        const response = await axios.get(`${API_URL}/count`);
        return response.data;
    } catch (error) {
        console.error('Error fetching total portfolio:', error);
        throw error;
    }
};
