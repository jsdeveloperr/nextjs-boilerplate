import HttpApiService from '@/lib/HttpApiService'

const USERS_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

const { get, handleError } = HttpApiService

export const usersService = {
  getUser: () => {
    return get(`${USERS_ENDPOINT}`)
      .then((res) => res)
      .catch((err) => handleError(err))
  },
}
