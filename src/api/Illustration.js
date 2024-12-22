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

export const readIllustrationCategory = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/ilustrasi/kategori/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching illustration categories:', error);
        throw error;
    }
};

export const readIllustrationFile = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/ilustrasi/file/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching illustration files:', error);
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

export const updateStatusIllustrationFile = async (id, status) => {
    try {
        const response = await axios.put(`${API_URL}/ilustrasi/file/${id}/${status}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to update the status of illustration file with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to update the illustration file status. Please try again later.');
    }
};

export const addIllustration = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/ilustrasi/tambah`, data);
        return response.data;
    } catch (error) {
        console.error('Failed to add the illustration category:', error);
        throw new Error('Unable to add the illustration category. Please try again later.');
    }
};

export const addIllustrationFile = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/ilustrasi/tambah/file`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to add the illustration file:', error.response?.data || error.message);
        throw new Error(error.response?.data?.error || 'Unable to add the illustration file. Please try again later.');
    }
};

export const updateIllustrationCategory = async (data) => {
    try {
        const response = await axios.put(`${API_URL}/ilustrasi/ubah`, data);
        return response.data;
    } catch (error) {
        console.error('Failed to update the illustration category:', error);
        throw new Error('Unable to update the illustration category. Please try again later.');
    }
};

export const deleteIllustration = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/ilustrasi/hapus/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete the category with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to delete the category. Please try again later.');
    }
};

export const deleteIllustrationFile = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/ilustrasi/hapus/file/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete file with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to delete file. Please try again later.');
    }
};