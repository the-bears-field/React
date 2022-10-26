import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page1DetailA } from './Page1DetailA';
import { Page1DetailB } from './Page1DetailB';
import { Page2 } from './Page2';
import styled from 'styled-components';


export const App = () => {
  return (
    <BrowserRouter>
      <StyledApp>
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/page1"
            render={({ match: { url } }) => (
              <Switch>
                <Route exact path={url}>
                  <Page1/>
                </Route>
                <Route path={`${url}/detailA`}>
                  <Page1DetailA />
                </Route>
                <Route path={`${url}/detailB`}>
                  <Page1DetailB />
                </Route>
              </Switch>
          )} />
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
      </StyledApp>
    </BrowserRouter>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
