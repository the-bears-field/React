import { Link } from "react-router-dom";
import styled from "styled-components";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  return (
    <StyledPage1>
      <h1>Page1ページです</h1>
      <Link to={{
        pathname: '/page1/detailA',
        state: arr
      }}>
        DetailA
      </Link>
      <Link to="/page1/detailB">DetailB</Link>
    </StyledPage1>
  );
}

const StyledPage1 = styled.div`
  display: flex;
  flex-direction: column;
`;
