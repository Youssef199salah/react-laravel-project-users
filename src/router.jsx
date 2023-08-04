
import { createBrowserRouter } from 'react-router-dom';
import Login from './views/login.jsx';
import SignUp from './views/signup.jsx';
import Users from './views/users.jsx';
import NotFound from './views/notFound.jsx';
const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/users',
      element: <Users />
    },
    {
      path: '*',
      element: <NotFound />
    },


])

export default router;
