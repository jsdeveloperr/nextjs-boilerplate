/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

axios.defaults.headers.common.Accept = 'application/json'

const getHttpHeaders = (isAuthenticated = false): AxiosRequestConfig => {
  // Add your custom logic here, for example add a Token to the Headers
  if (isAuthenticated) {
    return {
      headers: {
        Authorization: 'Bearer YOUR_TOKEN',
      },
    }
  }

  return {}
}

const get = (path: string, config?: AxiosRequestConfig<any>): Promise<AxiosResponse> => axios.get(path, config)

const del = (path: string): Promise<AxiosResponse> => axios.delete(path)

const post = (path: string, data: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse> =>
  axios.post(path, data, config)

const put = (path: string, data: any): Promise<AxiosResponse> => axios.post(path, data)

const patch = (path: string, data: any): Promise<AxiosResponse> => axios.post(path, data, getHttpHeaders())

const handleError = (err: any) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`HttpService::Error : ${err}`)
    if (!err.response) {
      console.log(`Network error: ${err}`)
    } else if (err.response !== undefined) {
      const { status } = err.response
      if (status === 401 || status === 500) {
        console.log(`HttpService::Error(401 or 500) : ${err.response.data.message}`)
      }
    }
  }
  return Promise.resolve(err)
}

export default {
  get,
  del,
  post,
  put,
  patch,
  handleError,
}
