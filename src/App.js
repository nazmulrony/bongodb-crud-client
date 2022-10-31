import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      loader: () => fetch('http://localhost:5000/users')
    },
    {
      path: '/users/add',
      element: <AddUser />
    },
    {
      path: 'update/:id',
      element: <UpdateUser />,
      loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
