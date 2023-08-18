import axios from 'axios';

const HOST = 'https://localhost:7259';
const API_URL = HOST + '/Request';


const login = async (loginData) => {
    const response = await axios.post(API_URL + '/login', loginData);
    return response.data
}

const authService = {
    login
}

export default authService;