import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Main from './Layouts/Main';
import { ProductsAndCartLoader } from './Loaders/ProductsAndCartLoader';
import SignIn from './SignIn/SignIn';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ProductsAndCartLoader,
          element: <Shop></Shop>

        },
        {
          path: '/orders',
          loader: ProductsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signIn',
          element: <SignIn></SignIn>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
