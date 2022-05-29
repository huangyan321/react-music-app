import axios from 'axios';
const request = axios.create({
  baseURL: 'http://159.75.104.17:4001',
  timeout: 5000,
});
request.interceptors.response.use(config => {
  return config.data
})
export { request };
