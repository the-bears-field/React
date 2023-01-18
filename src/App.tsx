import './styles.css';
import { UserCard } from './components/UserCard';
import { VFC } from 'react';
import styled from 'styled-components';
import { useAllUsers } from './hooks/useAllUsers';

export const App: VFC = () => {
  const { getUsers, userProfiles, isLoading, isError } = useAllUsers()

  const onClickFetchUser = () => getUsers()

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