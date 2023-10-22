import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';

import { SearchProvider } from './Context/SearchContext.jsx';
import { RenderFilteredBooksProvider } from './Context/RenderFilteredBooksContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RenderFilteredBooksProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </RenderFilteredBooksProvider>

  </React.StrictMode>,
)
