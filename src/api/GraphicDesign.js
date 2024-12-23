import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const readGraphicDesign = async () => {
    try {
        const response = await axios.get(`${API_URL}/graphic-design`);
        return response.data;
    } catch (error) {
        console.error('Error fetching graphic design categories:', error);
        throw error;
    }
};

export const readGraphicDesignCategory = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/graphic-design/kategori/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching graphic design categories:', error);
        throw error;
    }
};

export const readGraphicDesignFile = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/graphic-design/file/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching graphic design files:', error);
        throw error;
    }
};

export const updateStatusGraphicDesign = async (id, status) => {
    try {
        const response = await axios.put(`${API_URL}/graphic-design/${id}/${status}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to update the status of graphic design category with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to update the graphic design category status. Please try again later.');
    }
};

export const updateStatusGraphicDesignFile = async (id, status) => {
    try {
        const response = await axios.put(`${API_URL}/graphic-design/file/${id}/${status}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to update the status of graphic design file with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to update the graphic design file status. Please try again later.');
    }
};

export const addGraphicDesign = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/graphic-design/tambah`, data);
        return response.data;
    } catch (error) {
        console.error('Failed to add the graphic design category:', error);
        throw new Error('Unable to add the graphic design category. Please try again later.');
    }
};

export const addGraphicDesignFile = async (id, data) => {
    try {
        const response = await axios.post(`${API_URL}/graphic-design/tambah/file/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to add the graphic design file:', error.response?.data || error.message);
        throw new Error(error.response?.data?.error || 'Unable to add the graphic design file. Please try again later.');
    }
};

export const updateGraphicDesignCategory = async (data) => {
    try {
        const response = await axios.put(`${API_URL}/graphic-design/ubah`, data);
        return response.data;
    } catch (error) {
        console.error('Failed to update the graphic design category:', error);
        throw new Error('Unable to update the graphic design category. Please try again later.');
    }
};

export const deleteGraphicDesign = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/graphic-design/hapus/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete the category with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to delete the category. Please try again later.');
    }
};

export const deleteGraphicDesignFile = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/graphic-design/hapus/file/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete file with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to delete file. Please try again later.');
    }
};
