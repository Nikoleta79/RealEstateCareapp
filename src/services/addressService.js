import axios from 'axios';

const API_URL = 'https://api.jsonbin.io/v3/b/674884e3e41b4d34e45c4e11/latest';
const API_HEADERS = {
  'Content-Type': 'application/json',
  'X-Master-Key': '$2b$10$6OQ5plkCt1vMLN8m7VMniOP5RSMQB3WOfPoQlYh/JNbs2xeF7psUu'
};

export const fetchAddresses = async () => {
  try {
    const response = await axios.get(API_URL, { headers: API_HEADERS });
    return response.data.record.addresses.slice(0, 10);
  } catch (error) {
    console.error("Error fetching addresses:", error);
    throw error;
  }
};
