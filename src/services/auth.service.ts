import { LoginBody } from 'models'
import axiosClient from 'utils/axiosClient'

export const login = (body: LoginBody) => {
  const url = `/login`

  return axiosClient.post(url, body)
}
