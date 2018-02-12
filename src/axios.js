import Axios from 'axios';

const instance = Axios.create({
    //baseURL: 'http://alemanisch.test/api',
    baseURL: 'http://alemanisch.rovix.xyz/api',
    timeout: 6000,
});

export default instance;