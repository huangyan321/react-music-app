import { Navigate } from 'react-router-dom';

import Discover from '@/views/discover';
import Album from '@/views/discover/com-pages/album';
import New from '@/views/discover/com-pages/new';
import Radio from '@/views/discover/com-pages/radio';
import Top from '@/views/discover/com-pages/top';
import Recommend from '@/views/discover/com-pages/recommend';
import Singer from '@/views/discover/com-pages/singer';

import Mine from '@/views/mine';
import Friends from '@/views/friends';
const routes = [
  {
    path: '/',
    exact: true,
    element: <Navigate to="/discover/recommend" />,
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="recommend" />,
      },
      {
        path: 'recommend',
        element: <Recommend />,
      },
      {
        path: 'album',
        element: <Album />,
      },
      {
        path: 'new',
        element: <New />,
      },
      {
        path: 'radio',
        element: <Radio />,
      },
      {
        path: 'top',
        element: <Top />,
      },
      {
        path: 'singer',
        element: <Singer />,
      },
    ],
  },
  {
    path: '/mine',
    element: <Mine />,
  },
  {
    path: '/friends',
    element: <Friends />,
  },
];
export default routes;
