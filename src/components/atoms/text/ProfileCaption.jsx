import styled from "styled-components";

export const ProfileCaption = (props) => {
  const { children } = props;

  return <StyledProfileCaption>{children}</StyledProfileCaption>;
}

const StyledProfileCaption = styled.p`
  color: #40514e;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;
