import { BrowserRouter, Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Router } from './router/Router';


export const App = () => {
  return (
    <BrowserRouter>
      <StyledApp>
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        <Router />
      </StyledApp>
    </BrowserRouter>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
