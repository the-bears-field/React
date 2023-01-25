import axios, { AxiosResponse } from 'axios'
import { useCallback, useState } from 'react';
import { User } from '../components/types/api/user';
import { useHistory } from 'react-router';
import { History } from 'history';

export const useAuth = () => {
  const history: History = useHistory()
  const [ loading, setLoading ] = useState<boolean>(false)

  const login = useCallback(
      (id: string) => {
        setLoading(true)

        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res: AxiosResponse) => {
          res.data
            ? history.push('/home')
            : alert('ユーザが見つかりません')
        })
        .catch(() => alert('ログインできません'))
        .finally(() => setLoading(false))
      }, [history]
  )
  return { login, loading }
}
