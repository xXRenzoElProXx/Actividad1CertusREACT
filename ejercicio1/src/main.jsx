import React from 'react';
import ReactDOM from 'react-dom';
import ColorChanger from './ColorChanger';

const App = () => (
  <React.StrictMode>
    <ColorChanger color="red" />
    <ColorChanger color="blue" />
    <ColorChanger color="green" />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
