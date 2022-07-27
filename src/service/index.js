import axios from 'axios';
const request = axios.create({
  baseURL: 'https://musicapi.hgyn23.cn',
  timeout: 5000,
});
request.interceptors.response.use(config => {
  return config.data
})
export { request };
