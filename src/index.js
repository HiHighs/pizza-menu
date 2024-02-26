import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>Helloooooooooooooo</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return <h2>Pizza</h2>;
}

const root = createRoot(document.querySelector('#root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
