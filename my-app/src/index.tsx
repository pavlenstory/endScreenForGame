import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import team from './utils/team'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App team={team}/>
  </React.StrictMode>
);
