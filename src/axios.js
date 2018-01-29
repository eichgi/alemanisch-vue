import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://alemanisch.test/api',
    //baseURL: 'http://104.236.246.206/api',
    timeout: 6000,
});

export default instance;