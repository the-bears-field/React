import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({isAdmin: true});
    history.push('/users');
  };

  const onClickGeneral = () => {
    setUserInfo({isAdmin: false});
    history.push('/users');
  };

  return (
    <StyledContainer>
      <h2>TOPページです</h2>
      <ButtonWrapper>
        <SecondaryButton className="button--admin" onClick={onClickAdmin}>管理者</SecondaryButton>
        <SecondaryButton className="button--general" onClick={onClickGeneral}>一般ユーザ</SecondaryButton>
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
  margin: 0 auto;
  width: 128px;
`;
