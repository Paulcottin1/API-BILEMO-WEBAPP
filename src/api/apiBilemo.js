import axios from 'axios'



export default() => {
    axios.defaults.baseURL = "http://api-bilemo.paulcottin.com:8082";
    // axios.defaults.baseURL = 'http://127.0.0.1:8000';
    // axios.defaults.headers.common['X-Auth-Token'] = "I7BGiGqaaj76tUKTl2NOb5tB/szE4Z940gz6Gijk59H+SHX7DwZcrNZ2iMWb0cTCHAA=";
    // axios.defaults.headers.common[''] = 'I7BGiGqaaj76tUKTl2NOb5tB/szE4Z940gz6Gijk59H+SHX7DwZcrNZ2iMWb0cTCHAA=';

    return axios.create({
        // withCredentials: false,
    })
}
