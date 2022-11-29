import { Link } from "react-router-dom";
import styled from "styled-components";
import { HeaderUnorderList } from "../list/HeaderUnorderList";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderUnorderList className="header__menu">
        <li><Link to="/">HOMES</Link></li>
        <li><Link to="/users">USERS</Link></li>
      </HeaderUnorderList>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #11999e;
  color: white;
  padding: 8px 0;
  text-align: center;
`;
