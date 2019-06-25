// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import axios from "axios"


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
    baseURL: 'http://6fb76f63.ngrok.io/',
    responseType: "json",
    headers: {
      // 'Cache-Control': 'no-cache',
      'Content-Type': 'application/x-www-form-urlencoded'

    },

    timeout: 30000
  })

  const api = axios.create({
    // base URL is read from the "constructor"
    baseURL: 'http://6fb76f63.ngrok.io/api/v1',
    // baseURL: 'https://hoshyaar.herokuapp.com/api/v1',

    // here are some default headers
    responseType: "json",
    headers: {
      
      // 'Cache-Control': 'no-cache',
      // Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    // 10 second timeout...
    timeout: 3000
  })

  const getDistricts = (payload, headers) => {
    return api.get('/schools/district', {}, { headers })
  }


  return {
    getDistricts,
  }
}

// let's return back our create method as the default.
export default {
  create
}
