import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewToDo from './listitem';

// ReactDOM.createRoot(document.getElementById("root").render(<App />))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />
);

document.getElementById("newReminderButton").addEventListener("click", () => {
  
});