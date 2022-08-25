import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// You can also do this
// ReactDOM.render(<App/>, document.getElementById('root'))
// to hook your react application to the root div

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

