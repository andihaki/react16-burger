import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-my-burger-8f4cb.firebaseio.com/'    
});

export default instance;

