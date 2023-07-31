import axios from 'axios';
const BASE_URL = 'https://localhost:7259/Patient';

const getPatients = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const postPatients = async (patientData) => {
    try {
        const response = await axios.post(BASE_URL, patientData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

const patientService = {
    getPatients,
    postPatients
}

export default patientService;