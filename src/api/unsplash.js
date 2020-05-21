import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
                    'Client-ID Ip4wX2pfu4X4f_12k2cWd54ntiRO8zPaHZDBWIDD71w'
    }
});