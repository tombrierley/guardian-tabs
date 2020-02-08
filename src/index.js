import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import TabbedContent from './containers/TabbedContent';
import GlobalStyle from './styles/GlobalStyle';
import main from './theme/main';

const renderApp = async () => {
  ReactDOM.render(
    <ThemeProvider theme={main}>
      <GlobalStyle />
      <TabbedContent />
    </ThemeProvider>,
    document.getElementById('root'),
  );
};

renderApp();
