const server_dev = 'http://localhost:5000';
const server_production = '';
const server_url = (process.env.NODE_ENV === 'production') ?
  server_production : server_dev;

export const GET_EXERCISES = `${server_url}/api/exercises/`;
export const CREATE_EXERCISES = `${server_url}/api/exercises/add/`;
export const UPDATE_EXERCISES = `${server_url}/api/exercises/update/`;
export const DELETE_EXERCISES = `${server_url}/api/exercises/`;
export const GET_USERS = `${server_url}/api/users/`;
export const CREATE_USERS = `${server_url}/api/users/add/`;