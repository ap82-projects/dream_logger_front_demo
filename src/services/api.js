import axios from 'axios';

const  Api = axios.create({
    baseURL: "http://localhost:5436"
});

export default Api;