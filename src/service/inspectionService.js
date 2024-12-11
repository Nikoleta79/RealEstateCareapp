import axios from 'axios';

const API_URL = 'https://api.jsonbin.io/v3/b/674884e3e41b4d34e45c4e11/latest';
const HEADERS = {
  'Content-Type': 'application/json',
  'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu',
};

const inspectionsService = {
  // Get all inspections
  async getAllInspections() {
    try {
      const response = await axios.get(API_URL, { headers: HEADERS });
      // Check if response structure matches expectations
      if (response.data?.record?.inspections) {
        return response.data.record.inspections; // Adjust based on actual API structure
      }
      throw new Error('Unexpected response structure');
    } catch (error) {
      console.error('Error fetching inspections:', error);
      throw error;
    }
  },

  // Get a single inspection by ID
  async getInspectionById(inspectionId) {
    try {
      const response = await axios.get(`${API_URL}/${inspectionId}`, { headers: HEADERS });
      return response.data;
    } catch (error) {
      console.error(`Error fetching inspection with ID ${inspectionId}:`, error);
      throw error;
    }
  },

    async createInspection(newInspectionData) {
    try {
      const response = await axios.post(API_URL, newInspectionData, { headers: HEADERS });
      return response.data;
    } catch (error) {
      console.error('Error creating new inspection:', error);
      throw error;
    }
  },
  
  async deleteInspection(inspectionId) {
    try {
      const response = await axios.delete(`${API_URL}/${inspectionId}`, { headers: HEADERS });
      return response.data;
    } catch (error) {
      console.error(`Error deleting inspection with ID ${inspectionId}:`, error);
      throw error;
    }
  },
};

export default inspectionsService;



