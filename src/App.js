import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import Singup from './Pages/Singup/Singup';
import Home from './Pages/Home/Home/Home';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path: '/',
          element:<Home></Home>
      },
      {
        path: '/login', 
        element: <Login></Login>
      },
      {
        path: '/signup', 
        element: <Singup></Singup>
      },
        
      ]

    }
  ])
  return (
    <div data-theme="cupcake" className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
