import axios from 'axios';

export const httpClient = axios.create({
  baseURL: `http://g-axon.work/jwtauth/api/`, //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
});
