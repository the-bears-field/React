import { memo, useEffect, VFC } from "react"
import { Center, Spinner, Wrap, WrapItem } from '@chakra-ui/react';
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from '../../hooks/useAllUsers';
import { User } from "../types/api/user";

export const UserManagement: VFC = memo(() => {
  const imageUrl: string = 'https://source.unsplash.com/random'
  const { getUsers, loading, users } = useAllUsers()

  useEffect(() => getUsers(), [])

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
                    imageUrl={imageUrl}
                    userName={user.username}
                    fullName={user.name}
                  />
                </WrapItem>
              )) }
          </Wrap>
      ) }
    </>
  )
})
