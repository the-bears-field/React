import axios, { AxiosResponse } from 'axios'
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { History } from 'history';

import { User } from '../types/api/user';
import { useMessage } from './useMessage';
import { useLoginUser } from './useLoginUser';

export const useAuth = () => {
  const history: History = useHistory()
  const { showMessage } = useMessage()
  const [ loading, setLoading ] = useState<boolean>(false)
  const { setLoginUser } = useLoginUser()

  const login = useCallback(
      (id: string) => {
        setLoading(true)

        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res: AxiosResponse) => {
          if (res.data) {
            const isAdmin: boolean = res.data.id === 10 ? true : false
            setLoginUser({ ...res.data, isAdmin })
            history.push('/home')
            showMessage({title: 'ログインしました', status: 'success'})
          } else {
            showMessage({title: 'ユーザが見つかりません', status: 'error'})
            setLoading(false)
          }
        })
        .catch(() => {
          showMessage({title: 'ログインできません', status: 'error'})
          setLoading(false)
        })
      }, [history, showMessage, setLoginUser]
  )
  return { login, loading }
}
