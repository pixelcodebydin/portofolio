import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const readWebDevelopment = async () => {
    try {
        const response = await axios.get(`${API_URL}/web-development`);
        return response.data;
    } catch (error) {
        console.error('Error fetching websites:', error);
        throw error;
    }
};

export const readWebDevelopmentCategory = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/web-development/kategori/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching websites:', error);
        throw error;
    }
};

export const readWebDevelopmentActiveCategory = async () => {
    try {
        const response = await axios.get(`${API_URL}/web-development/aktif`);
        return response.data;
    } catch (error) {
        console.error('Error fetching web development active projects:', error);
        throw error;
    }
};

export const readWebDevelopmentFile = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/web-development/file/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching website development files:', error);
        throw error;
    }
};

export const readWebDevelopmentActiveFile = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/web-development/file-aktif/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching web development active files:', error);
        throw error;
    }
};

export const updateStatusWebDevelopment = async (id, status) => {
    try {
        const response = await axios.put(`${API_URL}/web-development/${id}/${status}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to update the status of web development project with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to update the web development project status. Please try again later.');
    }
};

export const updateStatusWebDevelopmentFile = async (id, status) => {
    try {
        const response = await axios.put(`${API_URL}/web-development/file/${id}/${status}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to update the status of web development file with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to update the web development file status. Please try again later.');
    }
};

export const addWebDevelopment = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/web-development/tambah`, data);
        return response.data;
    } catch (error) {
        console.error('Failed to add the web development project:', error);
        throw new Error('Unable to add the web development project. Please try again later.');
    }
};

export const addWebDevelopmentFile = async (id, data) => {
    try {
        const response = await axios.post(`${API_URL}/web-development/tambah/file/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to add the web development file:', error.response?.data || error.message);
        throw new Error(error.response?.data?.error || 'Unable to add the web development file. Please try again later.');
    }
};

export const updateWebDevelopmentCategory = async (data) => {
    try {
        const response = await axios.put(`${API_URL}/web-development/ubah`, data);
        return response.data;
    } catch (error) {
        console.error('Failed to update the web development project:', error);
        throw new Error('Unable to update the web development project. Please try again later.');
    }
};

export const deleteWebDevelopment = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/web-development/hapus/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete the project with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to delete the project. Please try again later.');
    }
};

export const deleteWebDevelopmentFile = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/web-development/hapus/file/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete file with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to delete file. Please try again later.');
    }
};
