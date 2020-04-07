import axios from 'axios';
const baseURL = 'http://localhost:3001/';
const getRequest = (option,callback) => {
    axios.get(baseURL+option)
    .then((response) => {
        callback(response);
    })
    .catch((error) => {
        callback(error);
    })
    .then(() => {});
}
export const deleteRequest = (option,callback) => {
    axios.delete(baseURL+option.type+'/'+option.id)
    .then((response) => {
        callback(response);
    })
    .catch((error) => {
        callback(error);
    })
    .then(() => {});
}
export default getRequest;