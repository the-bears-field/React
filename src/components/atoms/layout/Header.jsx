import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { HeaderUnorderList } from "../list/HeaderUnorderList";


export const Header = () => {
  return (
    <StyledHeader>
      <BrowserRouter>
        <HeaderUnorderList className="header__menu">
          <li><Link to="/">HOMES</Link></li>
          <li><Link to="/users">USERS</Link></li>
        </HeaderUnorderList>
        <Switch>
          <Route exact path="/">
          </Route>
          <Route path="/users">
          </Route>
        </Switch>
      </BrowserRouter>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #11999e;
  color: white;
  padding: 8px 0;
  text-align: center;
`;
