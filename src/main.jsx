import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Error from './components/Error/Error.jsx'
import Users from './components/Users/Users.jsx'
import Photos from './components/Photos/Photos.jsx'
import PhotoZoom from './components/PhotoZoom/PhotoZoom.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserDetails from './components/UserDetails/UserDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
      },
      {
        path: '/user/:userId',
        element: <UserDetails></UserDetails>,
        // loader: ({ params }) => console.log(params.userId),
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
      {
        path: '/photos',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/photos`),
        element: <Photos></Photos>,
      },
      {
        path: '/photos/:id',
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`),
        element: <PhotoZoom></PhotoZoom>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
