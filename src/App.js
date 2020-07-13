import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme'; 

import Button from './components/ui/Button/Button';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button variant="primary">
          Sample Magic Button
        </Button>
        <Button variant="secondary">
          Sample Magic Button
        </Button>
        <Button variant="tertiary">
          Sample Magic Button
        </Button>
      </div>
      {/* 
      # Referências
      - https://gestalt.netlify.app/?#/components/Button
      - https://material-ui.com/components/buttons/#button
      - spacing
      */}
    </ThemeProvider>
  );
}

export default App;
