import './styles.css';
import { UserCard } from './components/UserCard';
import { useState, VFC } from 'react';
import axios from 'axios';
import { UserProfile } from './types/userProfile';
import { User } from './types/api/user';
import styled from 'styled-components';

export const App: VFC = () => {
  const [ userProfiles, setUserProfiles ] = useState<Array<UserProfile>>([])
  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  const [ isError, setIsError ] = useState<boolean>(false)

  const onClickFetchUser = () => {
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

  return (
    <StyledApp>
      <button onClick={onClickFetchUser}>データ取得</button>
      { isError && <StyledErrorMessage>データ取得に失敗しました</StyledErrorMessage> }
      { isLoading && <StyledParagraph>Loading...</StyledParagraph> }
      { (!isError && !isLoading) &&
        userProfiles.map((user) => <UserCard key={user.id} user={user} />)
      }
    </StyledApp>
  );
}

const StyledApp = styled.div`
  width:100vw;
  margin: 0 auto;
`

const StyledParagraph = styled.p`
  color: black;
  font-size: 16px;
`

const StyledErrorMessage = styled(StyledParagraph)`
  color: red;
`