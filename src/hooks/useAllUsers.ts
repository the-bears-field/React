import axios from 'axios';
import { useState } from 'react';
import { User } from '../types/api/user';
import { UserProfile } from '../types/userProfile';

// 全ユーザ情報を取得するカスタムフック
export const useAllUsers = () => {
  const [ userProfiles, setUserProfiles ] = useState<Array<UserProfile>>([])
  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  const [ isError, setIsError ] = useState<boolean>(false)

  const getUsers = () => {
    setIsLoading(true)
    setIsError(false)

    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const data = res.data.map<UserProfile>((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.street} ${user.address.suite} ${user.address.city}`
        }))
        setUserProfiles(data)
      }).catch(() => {
        setIsError(true)
      }).finally(() => {
        setIsLoading(false)
      })
  }

  return { getUsers, userProfiles, isLoading, isError }
}