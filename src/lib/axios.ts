'use client';

import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_KEY,
});

// TODO add real api key on .env file
