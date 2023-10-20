import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SearchProvider } from './Context/SearchContext.jsx';

import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

import Home from './Routes/Home.jsx';
import Books from './Routes/Books.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="dashboard" element={<Books />} />
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProvider>
      <RouterProvider router={router}/>
    </SearchProvider>
  </React.StrictMode>,
)
