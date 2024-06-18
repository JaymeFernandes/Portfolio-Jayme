// dependences

import { Route } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";


// import Routers
import R_Home from './routes/R_Home';


// style
import './styles/app.scss'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={ <R_Home/> } />
        <Route path="/:lenguage" element={ <R_Home/> } />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
