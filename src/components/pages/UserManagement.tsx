import { memo, useCallback, useEffect, VFC } from "react"
import { Center, Spinner, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react';

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from '../../hooks/useAllUsers';
import { User } from "../types/api/user";
import { UserDetalModal } from '../organisms/user/UserDetalModal';
import { useSelectUser } from '../../hooks/useSelectUser';

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const imageUrl: string = 'https://source.unsplash.com/random'
  const { getUsers, loading, users } = useAllUsers()
  const { onSelectUser, selectedUser } = useSelectUser()

  const onClickUser: (id: number) => void
    = useCallback((id: number) => {
        onSelectUser({id, users, onOpen})
    }, [users, onOpen, onSelectUser])

  useEffect(() => getUsers(), [getUsers])

  return (
    <>
      { loading
        ? (
          <Center h="100vh">
            <Spinner />
          </Center>
        )
        : (
          <Wrap p={{ base: 4, md: 10 }} >
              { users.map((user: User) => (
                <WrapItem key={user.id} mx="auto" >
                  <UserCard
                    id={user.id}
                    imageUrl={imageUrl}
                    userName={user.username}
                    fullName={user.name}
                    onClick={() => onClickUser(user.id)}
                  />
                </WrapItem>
              )) }
          </Wrap>
      ) }
      <UserDetalModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  )
})
