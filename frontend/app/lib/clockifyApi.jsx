import axios from 'axios';

const API_KEY = 'MzYwNjE4MDUtNzQzZS00ZDk5LWIyMDktOTk1NGZmYjFhNzM5';
const WORKSPACE_ID = '67077c8f31414c2f6c5518d2';
const API_BASE_URL = 'https://api.clockify.me/api/v1';

const clockifyApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-Api-Key': API_KEY,
    'Content-Type': 'application/json',
  },
});

export async function getTimeEntries(userId, startDate, endDate) {
  try {
    const response = await clockifyApi.get(`/workspaces/${WORKSPACE_ID}/user/${userId}/time-entries`, {
      params: {
        start: startDate,
        end: endDate,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching time entries:', error);
    throw error;
  }
}

export async function getUsers() {
  try {
    const response = await clockifyApi.get(`/workspaces/${WORKSPACE_ID}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}