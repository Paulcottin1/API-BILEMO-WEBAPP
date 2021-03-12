import axios from 'axios'

export default() => {
    // axios.defaults.baseURL = 'http://127.0.0.1:8000';
    axios.defaults.baseURL = process.env.VUE_APP_API_URL;

    return axios.create({
        // withCredentials: false,
    })
}
