import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// version 17 syntax
ReactDOM.render(
  <App />,
  document.querySelector("#root")
)