import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-f8da9.firebaseio.com'
});

export default instance;