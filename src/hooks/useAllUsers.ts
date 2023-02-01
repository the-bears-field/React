import axios, { AxiosResponse } from "axios"
import { useCallback, useState } from 'react';

import { User } from "../types/api/user"
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
      showMessage({title: 'ユーザ取得に失敗しました。', status: 'error'})
    })
    .finally(() => setLoading(false))
  }, [showMessage])

  return { getUsers, loading, users }
}