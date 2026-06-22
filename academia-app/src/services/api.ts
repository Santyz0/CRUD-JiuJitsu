import axios from 'axios';

export const api = axios.create({
  // Substitui pelo IP do teu computador (ex: 'http://192.168.1.50:3333')
  baseURL: 'http://localhost:3333', 
});