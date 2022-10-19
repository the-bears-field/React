import React from 'react';
import './index.css';
import { InlineStyle } from './components/InlineStyle';
import { CssModules } from './components/CssModules';

export const App = () => {
  return (
    <div>
      <InlineStyle />
      <CssModules />
    </div>
  );
}
