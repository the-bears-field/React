import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page2 = () => {
  return (
    <StyledPage2>
      <p>Page2ページです</p>
      <Link to="/page2/999">URL Parameter</Link>
      <Link to="/page2/999?name=hogehoge">Query Parameter</Link>
    </StyledPage2>
  );
}

const StyledPage2 = styled.div`
  display: flex;
  flex-direction: column;
`;
