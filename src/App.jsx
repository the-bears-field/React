import React from 'react';
import './index.css';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';

export const App = () => {
  return (
    <div>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}
