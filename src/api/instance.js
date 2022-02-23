import axios from "axios"
import store from "@/store/index.js"

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8001/api/',
});
instance.defaults.headers.post['Content-Type'] = 'application/json'

instance.interceptors.request.use(async (config) => {
  if(config.skipAuth) return config;

  const accessToken = await requestValidAccessToken()

  return{
    ...config,
    headers: {
      common: {
        ['Authorization']: `Bearer ${accessToken}`
      }
    }
  }
}, function (error) {
  console.log(error)
  return Promise.reject(error);
});

instance.interceptors.response.use(
  async (response) => {
    const {status} = response;
    if (status === 401) {
        this.$store.dispatch('logout')
      }
    return response
  }
);

async function requestValidAccessToken() {
  const now = Math.floor(Date.now() * 0.001)

  if(!store.getters.isRefreshTokenValid(now)) {
    store.dispatch('logout')
  }
  else if (!store.getters.isAccessTokenValid(now)) {
    const refreshToken = {
      refresh: store.state.auth.refreshToken
    }
    await store.dispatch('authRefresh', refreshToken)
  }

  return store.state.auth.accessToken
}

export {instance}