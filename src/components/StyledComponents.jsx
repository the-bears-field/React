import styled from 'styled-components';

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- Styled Components -</STitle>
      <SButton>FIGHT!!</SButton>
    </SContainer>
  );
}

const SContainer = styled.div`
  align-items: center;
  border: solid 2px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  margin: 8px;
  padding: 8px;
`;

const STitle = styled.p`
  color: #3d84d8;
  margin: 0;
`;

const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  border-radius: 8px;
  padding: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
  }
`;
