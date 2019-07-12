// a library to wrap and simplify api calls
import apisauce from 'apisauce';
import axios from 'axios';

// our "constructor"
const create = () => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //

  const authApi = axios.create({
    // baseURL: 'https://hoshyaar.herokuapp.com',
    baseURL: 'http://2b5e406a.ngrok.io/',
    responseType: 'json',
    headers: {
      // 'Cache-Control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded',
    },

    timeout: 30000,
  });

  const api = axios.create({
    // base URL is read from the "constructor"
    baseURL: 'http://2b5e406a.ngrok.io/api/v1',
    // baseURL: 'https://hoshyaar.herokuapp.com/api/v1',

    // here are some default headers
    responseType: 'json',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    timeout: 3000,
  });

  const allReports = (payload, headers) => api.get('/reports', {}, { headers });
  const allSchool = (payload, headers) => api.get('/schools', {}, { headers });
  const getAllUsers = (payload, headers) => api.get('/users', {}, { headers });
  const toggleStatus = (payload, headers) => {
    const { user_id } = payload;
    return api.get(`/users/toggle_status?user_id=${user_id}`, {}, { headers });
  };

  return {
    allSchool,
    getAllUsers,
    toggleStatus,
    allReports,
    allSchool,
  };
};

// let's return back our create method as the default.
export default {
  create,
};
