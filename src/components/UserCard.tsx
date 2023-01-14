import { VFC } from 'react';
import styled from 'styled-components';
import { UserProfile } from '../types/userProfile';

type Props = {
  user: UserProfile
}

export const UserCard: VFC<Props> = (props) => {
  const { user } = props
  return (
    <StyledUserCard>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </StyledUserCard>
  )
}

const StyledUserCard = styled.div`
  border: solid 1px #ccc;
  border-radius: 8px;
  padding: 0 16px;
  margin: 8px 0;
`