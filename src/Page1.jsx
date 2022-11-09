import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();

  const onClickDetailA = () => history.push('/page1/detailA', arr);

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
      <button onClick={onClickDetailA}>DetailA</button>
    </StyledPage1>
  );
}

const StyledPage1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 40vw
`;
