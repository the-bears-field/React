import styled from "styled-components";
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

const users = [...Array(10).keys()].map((val)=>{
  return {
    id: val,
    name: `John Smith - ${val}`,
    image: 'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b',
    email: 'test@example.com',
    tel: '012-345-6789',
    company: {
      name: 'Unchi株式会社'
    },
    website: 'http://www.example.com'
  };
});

export const Users = () => {
  return (
    <StyledContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <StyledUserArea>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />
        })}
      </StyledUserArea>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 0 auto 48px;
  padding: 24px;
  text-align: center;
`;

const StyledUserArea = styled.div`
  padding-top: 48px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
