import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return (
    <StyledCard>{children}</StyledCard>
  );
}

const StyledCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: #ddd 0px 0px 4px 2px;
  padding: 16px;
`;
