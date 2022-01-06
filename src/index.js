import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import ThirdWeb
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

// Include what chains to support. Number is the Network ChainID
const supportedChainIds = [4];

// Include what type of wallet to support.
// In this case, Metamask is an "injected wallet".
const connectors = {
  injected: {},
};

// Wrap App with ThirdwebWeb3Provider.
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <App />
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById('root')
);