import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <StyledContainer>
      <Input placeholder="検索条件を入力"/>
      <StyledSearchInputWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </StyledSearchInputWrapper>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`

const StyledSearchInputWrapper = styled.div`
  padding-left: 8px;
`;