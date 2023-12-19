import React from 'react';
import Dashboard from '../pages/dashboard';
import Musiques from '../pages/musiques';
import Artistes from '../pages/artistes';
import PlayLists from '../pages/playlist';
import Albums from '../pages/albums';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Album from '../pages/albums/[id]';
// import {Provider} from 'react-redux';
// import store from '../services/redux/store/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/musiques',
    element: <Musiques />,
  },
  {
    path: '/artistes',
    element: <Artistes />,
  },
  {
    path: '/playlists',
    element: <PlayLists />,
  },
  {
    path: '/albums',
    element: <Albums />,
  },
  {
    path: 'albums/:id',
    element: <Album />,
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
