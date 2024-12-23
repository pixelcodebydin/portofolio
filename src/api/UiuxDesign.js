import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const readUiuxDesign = async () => {
    try {
        const response = await axios.get(`${API_URL}/ui-ux-design`);
        return response.data;
    } catch (error) {
        console.error('Error fetching UI/UX design categories:', error);
        throw error;
    }
};

export const readUiuxDesignCategory = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/ui-ux-design/kategori/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching UI/UX design categories:', error);
        throw error;
    }
};

export const readUiuxDesignActiveCategory = async () => {
    try {
        const response = await axios.get(`${API_URL}/ui-ux-design/aktif`);
        return response.data;
    } catch (error) {
        console.error('Error fetching UI/UX design active categories:', error);
        throw error;
    }
};

export const readUiuxDesignFile = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/ui-ux-design/file/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching UI/UX design files:', error);
        throw error;
    }
};

export const readUiuxDesignActiveFile = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/ui-ux-design/file-aktif/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching UI/UX design active files:', error);
        throw error;
    }
};

export const updateStatusUiuxDesign = async (id, status) => {
    try {
        const response = await axios.put(`${API_URL}/ui-ux-design/${id}/${status}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to update the status of UI/UX design category with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to update the UI/UX design category status. Please try again later.');
    }
};

export const updateStatusUiuxDesignFile = async (id, status) => {
    try {
        const response = await axios.put(`${API_URL}/ui-ux-design/file/${id}/${status}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to update the status of UI/UX design file with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to update the UI/UX design file status. Please try again later.');
    }
};

export const addUiuxDesign = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/ui-ux-design/tambah`, data);
        return response.data;
    } catch (error) {
        console.error('Failed to add the UI/UX design category:', error);
        throw new Error('Unable to add the UI/UX design category. Please try again later.');
    }
};

export const addUiuxDesignFile = async (id, data) => {
    try {
        const response = await axios.post(`${API_URL}/ui-ux-design/tambah/file/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to add the UI/UX design file:', error.response?.data || error.message);
        throw new Error(error.response?.data?.error || 'Unable to add the UI/UX design file. Please try again later.');
    }
};

export const updateUiuxDesignCategory = async (data) => {
    try {
        const response = await axios.put(`${API_URL}/ui-ux-design/ubah`, data);
        return response.data;
    } catch (error) {
        console.error('Failed to update the UI/UX design category:', error);
        throw new Error('Unable to update the UI/UX design category. Please try again later.');
    }
};

export const deleteUiuxDesign = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/ui-ux-design/hapus/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete the category with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to delete the category. Please try again later.');
    }
};

export const deleteUiuxDesignFile = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/ui-ux-design/hapus/file/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete file with ID ${id}. Error: ${error.message}`);
        throw new Error('Unable to delete file. Please try again later.');
    }
};
