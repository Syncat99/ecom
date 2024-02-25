import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Homepage.jsx'
import Cart from './pages/Cart.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/ecom/',
    element: <Homepage />,
  },
  {
    path: '/ecom/cart',
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router}/>
  </Provider>
);
