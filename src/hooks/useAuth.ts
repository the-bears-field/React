import axios, { AxiosResponse } from 'axios'
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { History } from 'history';

import { User } from '../types/api/user';
import { useMessage } from './useMessage';

export const useAuth = () => {
  const history: History = useHistory()
  const { showMessage } = useMessage()
  const [ loading, setLoading ] = useState<boolean>(false)

  const login = useCallback(
      (id: string) => {
        setLoading(true)

        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res: AxiosResponse) => {
          if (res.data) {
            history.push('/home')
            showMessage({title: 'ログインしました', status: 'success'})
          } else {
            showMessage({title: 'ユーザが見つかりません', status: 'error'})
          }
        })
        .catch(() => showMessage({title: 'ログインできません', status: 'error'}))
        .finally(() => setLoading(false))
      }, [history, showMessage]
  )
  return { login, loading }
}
