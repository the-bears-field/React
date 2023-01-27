import axios, { AxiosResponse } from "axios"
import { useCallback, useState } from 'react';

import { User } from "../components/types/api/user"
import { useMessage } from './useMessage';


export const useAllUsers: Function = () => {
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ users, setUsers ] = useState<Array<User>>([])
  const { showMessage } = useMessage()

  const getUsers: Function = useCallback(() => {
    setLoading(true)
    axios.get<Array<User>>('https://jsonplaceholder.typicode.com/users')
    .then((res: AxiosResponse)=> {
      setUsers(res.data)
    })
    .catch(() => {
      showMessage({title: 'ユーザ所得に失敗しました。', status: 'error'})
    })
    .finally(() => setLoading(false))
  }, [])

  return { getUsers, loading, users }
}