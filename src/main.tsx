import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

const rootHTMLElement: HTMLElement | null = document.getElementById('root');

const renderApp = (): JSX.Element => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (rootHTMLElement !== null) {
  ReactDOM.createRoot(rootHTMLElement).render(renderApp());
}
