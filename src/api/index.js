import axios from "axios"
import { AUTH_LOGOUT, AUTH_REFRESH } from '@/store/modules/auth.js';
// import accessToken from "@/store/index.js"

// if (accessToken) axios.defaults.headers.common['Authorization'] = `bearer ${accessToken}`

 async function signin ({email, password}) {
  // eslint-disable-next-line no-useless-catch
  try{
    const resp = await axios({
      url:'http://127.0.0.1:8001/api/auth/token/obtain/', 
      data: {email, password}, 
      method: 'POST',
      skipAuth: true 
    })
    return resp
  } catch (e) {
    throw e
  }
}

async function signup ({email, password, username}) {
  // eslint-disable-next-line no-useless-catch
  try {
    const resp = await axios({
      url:'http://127.0.0.1:8001/api/auth/register/', 
      data: {username, email, password}, 
      method: 'POST',
      skipAuth: true 
    })
    return resp
  } catch (e) {
    throw e
  }
}

async function refreshToken ({refreshToken}) {
  // eslint-disable-next-line no-useless-catch
  try {
    const resp = await axios({
      url:'http://127.0.0.1:8001/api/auth/token/refresh/', 
      data: {refreshToken}, 
      method: 'POST',
      skipAuth: true 
    })
    return resp
  } catch (e) {
    throw e
  }
}

axios.interceptors.response.use(
  async (response) => {
    const {status} = response;

    if (status === 401) {
      const accessToken = await this.$store.dispatch(AUTH_REFRESH);
      if (accessToken) {
        const _response = await axios({
          // eslint-disable-next-line no-undef
          ...config,
          headres: {
            common: {
              ['Authorization']: `bearer ${accessToken}`
            }
          }
        })
        return _response
      } else {
        this.$store.commit(AUTH_LOGOUT)
      }
    }
    return response;
  },
  (error) => Promise.reject(error)
)

export {signin, signup, refreshToken}