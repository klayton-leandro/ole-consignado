import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-ole.herokuapp.com',
});


export default api;
