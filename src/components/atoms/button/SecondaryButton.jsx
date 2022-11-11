import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const SecondaryButton = (props) => {
  const { children } = props;

    return (
    <StyledSecondaryButton>{ children }</StyledSecondaryButton>
  );
}

const StyledSecondaryButton = styled(BaseButton)`
  background-color: #11999e;
`;
