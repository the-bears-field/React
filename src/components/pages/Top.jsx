import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useSetRecoilState } from "recoil";
import { userState } from '../../store/userState';
import axios from "axios";


export const Top = () => {
  const history = useHistory();
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({isAdmin: true});
    history.push('/users');
  };

  const onClickGeneral = () => {
    setUserInfo({isAdmin: false});
    history.push('/users');
  };

  const onClickUsers = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }

  const onClickUser1 = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <StyledContainer>
      <h2>TOPページです</h2>
      <ButtonWrapper>
        <SecondaryButton className="button--admin" onClick={onClickAdmin}>管理者</SecondaryButton>
        <SecondaryButton className="button--general" onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <SecondaryButton className="button--users" onClick={onClickUsers}>Users</SecondaryButton>
        <SecondaryButton className="button--user1" onClick={onClickUser1}>User1</SecondaryButton>
      </ButtonWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 48px auto 0;
  width: 128px;
`;
