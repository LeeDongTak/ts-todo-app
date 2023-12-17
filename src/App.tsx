import React from 'react';

import Home from './pages/Home';
import GlobalStyle from './styled/GlobalStyle';
import styled from 'styled-components';

function App() {
  return (
    <StApp>
      <GlobalStyle />
      <Home />
    </StApp>
  );
}

export default App;

const StApp = styled.div`
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
