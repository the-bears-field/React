import styled from "styled-components";
import { DefaultUnorderList } from "./DefaultUnorderList";

export const HeaderUnorderList = (props) => {
  const { children, className } = props;

  return (
    <StyledHeaderUnorderList
      className={className}
    >
      {children}
    </StyledHeaderUnorderList>
  );
}

const StyledHeaderUnorderList = styled(DefaultUnorderList)`
  flex-direction: row;
  li:not(:last-child) {
    margin-right: 32px;
  }
`;
