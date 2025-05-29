'use client';

import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

// TODO add real api key on .env file
