import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || '/api';

console.log('🔧 API URL configurada:', apiUrl);

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
