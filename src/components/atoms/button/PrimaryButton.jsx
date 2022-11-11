import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const PrimaryButton = (props) => {
  const { children } = props;

  return (
    <StyledPrimaryButton>{ children }</StyledPrimaryButton>
  );
}

const StyledPrimaryButton = styled(BaseButton)`
  background-color: #40514e;
`;
