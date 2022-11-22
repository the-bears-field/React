import styled from "styled-components";

export const DefaultUnorderList = (props) => {
  const { children } = props;

  return (
    <StyledDefaultUnorderList
      className={props.className}
    >
      {children}
    </StyledDefaultUnorderList>
  );
}

const StyledDefaultUnorderList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  li:not(:last-child) {
    margin-bottom: 8px;
  }
`;
