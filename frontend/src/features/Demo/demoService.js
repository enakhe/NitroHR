import axios from 'axios';

const HOST = 'https://localhost:7259';
const API_URL = HOST + '/Request';

// Create a new request
const createRequest = async (requestData) => {
    const response = await axios.post(API_URL, requestData);
    return response.data;
}

const demoService = {
    createRequest
}

export default demoService;
