import { useState, useCallback } from 'react';
import { User } from '../components/types/api/user';

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
}

export const useSelectUser: Function
  = () => {
    const [ selectedUser, setSelectedUser ] = useState<User | null>(null)

    const onSelectUser: Function = useCallback(
      (props: Props) => {
        const { id, users, onOpen } = props
        const targetUser = users.find((user) => user.id === id)
       setSelectedUser(targetUser ?? null)
       onOpen()
    }, [])

    return { onSelectUser, selectedUser }
  }
