import Discover from '@/views/discover'
import Mine from '@/views/mine'
import Friends from '@/views/friends'

const routes = [
  {
    path: '/',
    exact: true,
    element: <Discover />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/friends',
    element: <Friends />
  }
]
export default routes