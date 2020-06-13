import axios from 'axios'

export default (token) => {
    axios.defaults.baseURL = 'http://localhost:3010';
    axios.defaults.headers.common['Authorization'] = token;
}