import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page1 = () => {
  return (
    <StyledPage1>
      <p>Page1ページです</p>
      <Link to="/page1/detailA">DetailA</Link>
      <Link to="/page1/detailB">DetailB</Link>
    </StyledPage1>
  );
}

const StyledPage1 = styled.div`
  display: flex;
  flex-direction: column;
`;
